import express from "express"
import expenseController from "../controllers/expense.controller.js"

const router = express.Router();

// Add Expense
router.post('', expenseController.addExpense);

// Search by Seller Name
router.get('/search', expenseController.searchExpense);

// Get Expenses based on filters
router.get('', expenseController.getExpenses);

// Update Expense
router.put('/:id', expenseController.updateExpense);

// Delete Expense
router.delete('/:id', expenseController.deleteExpense);


export default router;
