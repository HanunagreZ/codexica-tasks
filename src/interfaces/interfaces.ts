import { ObjectId } from 'mongodb';
import { Application } from 'express';

export interface IUser {
  insertedId: string;
  _id: ObjectId;
  email: string;
  order_ids: string[];
  created_at: Date;
  acknowledged: boolean;
}

export interface IUserRequestParams {
  app: Application;
  params: {
    id: string;
  };
  body: {
    email: string;
  };
}

export interface IOrder {
  _id: ObjectId;
  user_id: string;
  status: string;
  option: string;
  price: string;
  created_at: Date;
  insertedId: string;
  acknowledged: boolean;
}

export interface OrderRequestParams {
  app: Application;
  params: {
    id: string;
  };
  body: {
    user_id: string;
    status: string;
    option: string;
    price: string;
  };
}
