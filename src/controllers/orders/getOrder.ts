import { ObjectId } from 'mongodb';
import { Response } from 'express';
import { IOrder, OrderRequestParams } from '../../interfaces/interfaces';

export async function getOrderController(
  req: OrderRequestParams,
  res: Response
): Promise<void> {
  try {
    const { db } = req.app;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Order ID is required' });
    }

    const result: IOrder = await db
      .collection('orders')
      .findOne({ _id: new ObjectId(id) });

    if (!result) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({
      message: 'Order retrieved',
      order: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
