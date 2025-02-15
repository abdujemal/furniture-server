import express from 'express';
import * as Controllers from '../controllers/employee.activity.controller.js';

const router = express.Router();

// Route for adding an employee activity
router.post('', Controllers.addEmployeeActivity);

// Route for updating an employee activity
router.put('/:id', Controllers.updateEmployeeActivity);

// Route for deleting an employee activity
router.delete('/:employeeId', Controllers.deleteEmployeeActivities);

// Route for fetching employee activities
router.get('/:employeeId', Controllers.getEmployeeActivities);

// Route for fetching employee activities
router.get('/search/:employeeId', Controllers.searchActivities);

export default router;
