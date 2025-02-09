import express from "express"
import expenseController from "../controllers/expense.controller.js"

const router = express.Router();

// Add Expense
router.post('/expenses', expenseController.addExpense);

// Search Expenses by Seller Name
router.get('/expenses/search', expenseController.searchExpense);

// Get Expenses based on filters
router.get('/expenses', expenseController.getExpenses);

// Update Expense
router.put('/expenses/:id', expenseController.updateExpense);

// Delete Expense
router.delete('/expenses/:id', expenseController.deleteExpense);


export default router;
