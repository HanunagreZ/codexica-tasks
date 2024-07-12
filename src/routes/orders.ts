import { createOrderController } from '../controllers/orders/createOrder';
import { getOrderController } from '../controllers/orders/getOrder';
import { getOrdersController } from '../controllers/orders/getOrders';

const express = require('express');

const router = express.Router();

console.log('Orders route');

router.get('/:id', getOrderController);
router.get('/', getOrdersController);
router.post('/', createOrderController);

module.exports = router;
