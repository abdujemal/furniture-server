import express from 'express'
import * as orderController from "../controllers/order.controller.js"

const router = express.Router();

router.post('/orders', orderController.addOrder);
router.get('/orders', orderController.getOrders);

export default router;