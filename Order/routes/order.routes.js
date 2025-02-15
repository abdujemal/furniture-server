import express from 'express'
import * as orderController from "../controllers/order.controller.js"

const router = express.Router();

router.post('', orderController.addOrder);
router.get('', orderController.getOrders);
router.get('/:id/byKV', orderController.getOrdersByKv);
router.get('/:id/byMonth', orderController.getOrdersbyMonth);
router.get('/:id', orderController.getOrder);
router.post('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);




export default router;