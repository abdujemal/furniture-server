import express from 'express'
import * as customerController from "../controllers/customer.controller.js"

const router = express.Router();

router.post('', customerController.addCustomer);
router.post('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.get('', customerController.getCustomers);
router.get('/search', customerController.searchCustomers);


export default router;