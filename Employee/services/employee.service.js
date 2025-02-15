import { deleteFile, uploadFile } from '../../core/services/main.service.js';
import Employee from '../models/employee.model.js';
import EmployeeActivity from '../models/employee.activity.model.js';

// Service to add a new employee and upload file (image)
export const addEmployee = async (employeeData, file) => {
    try {
        // Create a new employee
        const employee = new Employee(employeeData);
      
        if (file) {
          // Upload the file to cloud storage and get the file URL
          const fileUrl = await uploadFile(file);
          employee.imgUrl = fileUrl; // Save file URL in the employee document
        }
      
        // Save the employee document to the database
        await employee.save();
        return employee;

    } catch (error) {
      console.log(error);
  
      throw new Error('Error adding Employee');
    }
}

// Service to update an existing employee and upload file (image)
export const updateEmployee = async (employeeId, employeeData, file) => {
    try {
        if (file) {
            if(employeeData.imgUrl && employeeData.imgUrl.length > 0){
                await deleteFile(employeeData.imgUrl, true);
            }
            // Upload the file to cloud storage and get the file URL
            const fileUrl = await uploadFile(file, 'Employees', employeeId);
            employeeData.imgUrl = fileUrl; // Save file URL in the employee document
        }
    
        // Save the updated employee document to the database
        const employee = await Employee.findByIdAndUpdate(employeeId, employeeData, { new: true });
        return employee;

    } catch (error) {
      console.log(error);
  
      throw new Error('Error updating Employee');
    }

}

// Service to get all employees
export const getEmployees = async () => {
    try {
        const employees = await Employee.find();
        return employees;

    } catch (error) {
      console.log(error);
  
      throw new Error('Error getting Employees');
    }
}

// Service to delete an employee by their ID
export const deleteEmployee = async (employeeId) => {
    try {
        // Delete the employee record from the database
        await Employee.findByIdAndDelete(employeeId);
        await EmployeeActivity.deleteMany({employeeId})
        return { message: 'Employee deleted successfully' };

    } catch (error) {
      console.log(error);
  
      throw new Error('Error deleting Employee');
    }
}
