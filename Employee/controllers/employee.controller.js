import { LIMIT } from "../../core/constants.js";
import * as employeeService from "../services/employee.service.js"

// Controller to handle adding a new employee
export const addEmployee = async (req, res) => {
  try {
    const result = await employeeService.addEmployee(req.body, req.file);

    res.status(200).json({result});
  } catch (err) {
    res.status(500).json({
      message: 'Error adding employee',
      error: err.message,
    });
  }
}

// Controller to handle updating an existing employee
export const updateEmployee = async (req, res) => {
  try {
    const file = req.file; // file will be available if uploaded via multer

    const { id } = req.params; // Assuming employeeId is passed in the URL params

    const result = await employeeService.updateEmployee(id, req.body, file);
    res.status(200).json({result});
  } catch (err) {
    res.status(500).json({
      message: 'Error updating employee',
      error: err.message,
    });
  }
}

// Controller to handle fetching all employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getEmployees();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching employees',
      error: err.message,
    });
  }
}

// Controller to handle deleting an employee
export const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params; // Assuming employeeId is passed in the URL params
    const result = await employeeService.deleteEmployee(employeeId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: 'Error deleting employee',
      error: err.message,
    });
  }
}

