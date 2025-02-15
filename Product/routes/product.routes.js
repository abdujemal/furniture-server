import express from "express"
import * as productController from "../controllers/product.controller.js"
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage(); // Store files in memory

// Initialize multer with multiple fields: one for images and one for related files
const upload = multer({
  storage: storage,
}).fields([
  { name: 'photos' },       
  { name: 'files' },
]);

router.post('', upload, productController.addProduct);
router.get('', productController.getProducts);
router.get('/search', productController.searchProducts);
router.put('/:productId',  upload, productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

export default router;