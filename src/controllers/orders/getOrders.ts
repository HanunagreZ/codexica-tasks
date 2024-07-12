import { Response } from 'express';
import { IOrder, OrderRequestParams } from '../../interfaces/interfaces';

export async function getOrdersController(
  req: OrderRequestParams,
  res: Response
): Promise<void> {
  try {
    const { db } = req.app;

    const result: IOrder[] = await db.collection('orders').find().toArray();

    res.status(200).json({
      message: 'Orders retrieved',
      orders: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
