import express from "express"
import * as productController from "../controllers/product.controller.js"
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage(); // Store files in memory

// Initialize multer with multiple fields: one for images and one for related files
const upload = multer({
  storage: storage,
}).fields([
  { name: 'images' },       
  { name: 'files' },
]);

router.post('/products', upload, productController.addProduct);
router.get('/products', productController.getProducts);

export default router;