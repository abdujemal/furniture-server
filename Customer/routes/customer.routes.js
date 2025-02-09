import express from 'express'
import * as customerController from "../controllers/customer.controller.js"

const router = express.Router();

router.post('/customers', customerController.addCustomer);
router.post('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);
router.get('/customers', customerController.getCustomers);
router.get('/customers/search', customerController.searchCustomers);


export default router;