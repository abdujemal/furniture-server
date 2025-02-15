import { LIMIT } from '../../core/constants.js';
import * as Services from '../services/employee.activity.service.js';

// Add an employee activity
export const addEmployeeActivity = async (req, res) => {
  try {
    const employeeActivity = req.body;
    const result = await Services.addEmployeeActivity(employeeActivity);
    res.status(200).json({result});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an employee activity
export const updateEmployeeActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const employeeActivity = req.body;
    const result = await Services.updateEmployeeActivity(employeeActivity, id);
    res.status(200).json({result});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an employee activity
export const deleteEmployeeActivities = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const result = await Services.deleteEmployeeActivities(employeeId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get employee activities
export const getEmployeeActivities = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const date = req.query.date; // Default page is 1
    const limit = parseInt(req.query.limit) || LIMIT; // Default limit is 10
    
    const activities = await Services.getEmployeeActivities(employeeId, limit, date);
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const searchActivities = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { year, month } = req.query;
    const result = await Services.searchActivities(employeeId, parseInt(year), parseInt(month));
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};