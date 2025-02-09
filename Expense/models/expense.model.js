// models/customer.model.js
import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
   
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    expenseStatus: {
      type: String,
      enum: ["Payed", "UnPayed"],
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      default: null,
    },
    employeeId: {
      type: String,
      default: null,
    },
    withReceipt: {
      type: Boolean,
      required: true,
      default: false,
    },
  }, { timestamps: true });  

const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense;

/** 
[
  {
    "category": "Office Supplies",
    "description": "Purchase of printer paper and ink cartridges",
    "price": 45.50,
    "expenseStatus": "Approved",
    "date": "2025-02-01",
    "seller": "Office Depot",
    "employeeId": "E123",
    "withReceipt": true
  },
  {
    "category": "Travel",
    "description": "Flight ticket for business trip to NYC",
    "price": 300.75,
    "expenseStatus": "Pending",
    "date": "2025-02-03",
    "seller": "Delta Airlines",
    "employeeId": "E456",
    "withReceipt": true
  },
  {
    "category": "Client Entertainment",
    "description": "Dinner with client at a local restaurant",
    "price": 120.30,
    "expenseStatus": "Approved",
    "date": "2025-01-25",
    "seller": "The Bistro",
    "employeeId": "E789",
    "withReceipt": true
  },
  {
    "category": "Software Subscriptions",
    "description": "Monthly subscription for project management software",
    "price": 59.99,
    "expenseStatus": "Paid",
    "date": "2025-02-05",
    "seller": "Asana",
    "employeeId": "E321",
    "withReceipt": false
  },
  {
    "category": "Office Rent",
    "description": "Monthly office rental payment",
    "price": 1500.00,
    "expenseStatus": "Paid",
    "date": "2025-02-06",
    "seller": "ABC Real Estate",
    "employeeId": "E654",
    "withReceipt": true
  }
]
**/