import { Response } from 'express';
import { IUser, IUserRequestParams } from '../../interfaces/interfaces';

export async function getUsersController(
  req: IUserRequestParams,
  res: Response
): Promise<void> {
  try {
    const { db } = req.app;

    const result: IUser[] = await db.collection('users').find().toArray();

    res.status(200).json({
      message: 'Users retrieved',
      users: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
