import { ObjectId } from 'mongodb';
import { Response } from 'express';
import { IOrder, IUser, OrderRequestParams } from '../../interfaces/interfaces';

export async function createOrderController(
  req: OrderRequestParams,
  res: Response
): Promise<void> {
  try {
    const { db } = req.app;
    const { user_id, status, option, price } = req.body;

    if (!user_id || !status || !option || !price) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const existingCustomer: IUser = await db.collection('users').findOne({
      _id: new ObjectId(user_id),
    });

    if (!existingCustomer) {
      return res.status(400).json({ message: 'User with given ID not found' });
    }

    const result: IOrder = await db.collection('orders').insertOne({
      user_id,
      status,
      option,
      price,
      created_at: new Date().toDateString(),
    });

    db.collection('users').updateOne(
      { _id: new ObjectId(user_id) },
      { $push: { order_ids: result.insertedId } }
    );

    if (result.acknowledged) {
      const returnedResult: IOrder = await db
        .collection('orders')
        .findOne({ _id: new ObjectId(result.insertedId) });

      res.status(200).json({ message: 'Order created', order: returnedResult });
    } else {
      throw new Error('Failed to create order');
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
