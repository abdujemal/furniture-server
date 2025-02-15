import mongoose from 'mongoose';

const employeeActivitySchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true
    },
    employeeName: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    orders: {
      type: [String],
      required: true
    },
    morning: {
      type: String,
      required: true
    },
    afternoon: {
      type: String,
      required: true
    },
    itemsUsed: {
      type: [String],
      required: true
    },
    payment: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Model creation
const EmployeeActivity = mongoose.model('EmployeeActivity', employeeActivitySchema);

export default EmployeeActivity;
