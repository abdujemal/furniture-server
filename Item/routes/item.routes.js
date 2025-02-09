import express from "express"
import * as itemController from "../controllers/item.controller.js"

const router = express.Router();

router.post('/items', itemController.addItem);
router.get('/items', itemController.getItems);

export default router;