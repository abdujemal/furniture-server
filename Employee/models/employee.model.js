import mongoose from 'mongoose';

// Define the Employee schema
const employeeSchema = new mongoose.Schema(
  { 
    _id: { type: String, required: true },        // Required field for name
    imgUrl: { type: String, default: '' },         // Optional image URL
    name: { type: String, required: true },        // Required field for name
    phoneNo: { type: String, required: true },     // Required field for phone number
    age: { type: String, required: true },         // Required field for age
    location: { type: String, required: true },    // Required field for location
    position: { type: String, required: true },    // Required field for position
    type: { type: String, required: true },        // Required field for employee type (e.g., full-time, part-time)
    payment: { type: String, required: true },     // Required field for payment method (e.g., hourly, salary)
    salaryType: { type: String, required: true },  // Required field for salary type (e.g., fixed, commission-based)
    startFromDate: { type: String, required: true }, // Required field for start date
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the Employee model based on the schema
const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
