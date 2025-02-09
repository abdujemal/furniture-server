import expenseService from "../services/expense.service.js"
import { LIMIT } from "../../core/constants.js"

// Add Expense
const addExpense = async (req, res) => {
  try {
    const expenseModel = req.body;
    const result = await expenseService.addExpense(expenseModel);
    res.status(200).send({ message: 'Expense added successfully', result });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Search Expenses by Seller Name
const searchExpense = async (req, res) => {
  try {
    const { sellerName } = req.query;
    const expenses = await expenseService.searchExpense(sellerName);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get Expenses based on filters
const getExpenses = async (req, res) => {
  try {
    const { status } = req.query;

    const page = parseInt(req.query.page) || 1; // Default page is 1
    const limit = parseInt(req.query.limit) || LIMIT; // Default limit is 10

    const expenses = await expenseService.getExpenses(limit, status, page);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update Expense
const updateExpense = async (req, res) => {
  try {
    const expenseModel = req.body;
    const { id } = req.params;
    const updatedExpense = await expenseService.updateExpense(id, expenseModel);
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// delete Expense
const deleteExpense = async (req, res) => {
    try {
      const { id } = req.params;
      await expenseService.deleteExpense(id);
      res.status(200).json({msg: `${id} deleted successfully`});
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

export default {
  addExpense,
  searchExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};
