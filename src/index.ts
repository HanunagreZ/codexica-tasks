import { MongoClient } from 'mongodb';
require('dotenv').config();

const express = require('express');
const body = require('body-parser');

async function start() {
  try {
    const app = express();
    const mongo = await MongoClient.connect(process.env.MONGODB_URI);

    await mongo.connect();
    app.db = mongo.db();

    app.use(
      body.json({
        limit: '1mb',
      })
    );

    app.use('/users', require('./routes/users'));
    app.use('/orders', require('./routes/orders'));

    app.listen(3000);
  } catch (error) {
    console.log(error);
  }
}

start();
