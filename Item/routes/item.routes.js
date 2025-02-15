import express from "express"
import multer from "multer";
import * as itemController from "../controllers/item.controller.js"

const router = express.Router();

// Configure Multer to store the file in memory
const storage = multer.memoryStorage();  // Store files as a buffer in memory

const upload = multer({ storage });  // Initialize Multer with memory storage

router.post('', upload.single('file'), itemController.addItem);
router.post('/:id', upload.single('file'), itemController.updateItem);
router.get('', itemController.getItems);
router.delete('/:itemId', itemController.deleteItem);
// activities
router.get('/:itemId/activities', itemController.getItemHistories);
router.post('/:itemId/activities', itemController.addItemHistory);//itemController.getItemHistories);

export default router;