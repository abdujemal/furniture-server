import express from 'express'
import * as employeeController from "../controllers/employee.controller.js"
import multer from 'multer';

const router = express.Router();

// Configure Multer to store the file in memory
const storage = multer.memoryStorage();  // Store files as a buffer in memory

const upload = multer({ storage });  // Initialize Multer with memory storage

router.post('', upload.single('file'), employeeController.addEmployee);
router.put('/:id', upload.single('file'), employeeController.updateEmployee);
router.get('', employeeController.getEmployees);
router.delete('/:employeeId', employeeController.deleteEmployee);

export default router;