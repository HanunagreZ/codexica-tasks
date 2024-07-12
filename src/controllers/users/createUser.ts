import { ObjectId } from 'mongodb';
import { Response } from 'express';
import { IUser, IUserRequestParams } from '../../interfaces/interfaces';

export async function createUserController(
  req: IUserRequestParams,
  res: Response
): Promise<void> {
  try {
    const { db } = req.app;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Missing email address' });
    }

    const existingCustomer: IUser = await db.collection('users').findOne({
      email: email.toLowerCase(),
    });

    if (existingCustomer) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const result: IUser = await db.collection('users').insertOne({
      email: email.toLowerCase(),
      created_at: new Date(),
      order_ids: [],
    });

    if (result.acknowledged) {
      const returnedResult: IUser = await db.collection('users').findOne({
        _id: new ObjectId(result.insertedId),
      });
      res.status(200).json({ message: 'User created', user: returnedResult });
    } else {
      throw new Error('Failed to create user');
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
