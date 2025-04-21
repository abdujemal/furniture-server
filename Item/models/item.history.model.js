import e from 'express';
import mongoose from 'mongoose';

// Define the schema for ItemHistory
const itemHistorySchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['Buyed', 'Used'],
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemImg: {
    type: String,
    default: ""
  },
  itemCategory: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: "",
  },
  seller: {
    type: String,
    default: "",
  },
  employeeId: {
    type: String,
    default: "",
  },
  orderId: {
    type: String,
    default: ""
  },
}, {
  timestamps: true, // Optional: automatically creates createdAt and updatedAt fields
});

// Create the Mongoose model
const ItemHistory = mongoose.model('ItemHistory', itemHistorySchema);

export default ItemHistory;
