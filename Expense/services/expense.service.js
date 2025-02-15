import Expense from "../models/expense.model.js";

// Add Expense
const addExpense = async (expenseModel) => {
  try {
    const expense = new Expense(expenseModel);
    await expense.save();
    return expense;
  } catch (error) {
    console.log(error);
    
    throw new Error(`Error adding expense`);
  }
};

// Search Expenses by Seller Name
const searchExpense = async (sellerName) => {
  try {
    
    const query = {};
    query["seller"] = { $regex: sellerName, $options: 'i' };
    const expenses = await Expense.find(query);
    return expenses;
  } catch (error) {
    console.log(error);

    throw new Error(`Error searching expenses`);
  }
};

// Get Expenses based on filters (quantity, status, date, isNew)
const getExpenses = async (quantity, status, page) => {
  try {
    
    const query = {};

    if (status) query.expenseStatus = status;
   
    const skip = (page - 1) * quantity;

    const expenses = await Expense.find(query)
      .skip(skip)
      .limit(quantity)
      .sort({ createdAt: -1 })
      .exec();

    return expenses;
  } catch (error) {
    console.log(error);

    throw new Error(`Error fetching expenses`);
  }
};

// Update Expense
const updateExpense = async (id, expenseModel) => {
  try {
    const expense = await Expense.findByIdAndUpdate(id, expenseModel, { new: true });
    return expense;
  } catch (error) {
    console.log(error);

    throw new Error(`Error updating expense`);
  }
};

// delete Expense
const deleteExpense = async (id) => {
  try {
    const expense = await Expense.findByIdAndDelete(id);
    return expense;
  } catch (error) {
    console.log(error);

    throw new Error(`Error deleting expense`);
  }
};

export default {
  addExpense,
  searchExpense,
  getExpenses,
  updateExpense,
  deleteExpense
};
