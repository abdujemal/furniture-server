import EmployeeActivity from '../models/employee.activity.model.js';

// Add a new employee activity
export const addEmployeeActivity = async (employeeActivity) => {
  try {
    const newActivity = new EmployeeActivity(employeeActivity);
    return await newActivity.save();
  } catch (err) {
    console.log(err);
    
    throw new Error('Error while adding employee activity');
  }
};

// Update an existing employee activity
export const updateEmployeeActivity = async (employeeActivity, id) => {
  try {
    const activity = await EmployeeActivity.findByIdAndUpdate(id, employeeActivity, { new: true });
    return activity;
  } catch (err) {
    console.log(err);

    throw new Error('Error while updating employee activity');
  }
};

// Delete an employee activity by employeeId and date
export const deleteEmployeeActivities = async (employeeId) => {
  try {
    const result = await EmployeeActivity.deleteMany({ employeeId });

    if (result.deletedCount === 0) {
      throw new Error('No activity found to delete');
    }

    return { message: `Employee activities for ${employeeId} deleted successfully` };
  } catch (err) {
    console.log(err);

    throw new Error('Error while deleting employee activity');
  }
};

// Fetch employee activities with optional quantity and sorting
export const getEmployeeActivities = async (employeeId, quantity, date) => {
  try {
    const filter = { employeeId };
    if (date) {
      filter.date = { $lt: date };
    }
    // const skip = (page - 1) * quantity;
    const activities = await EmployeeActivity.find(filter)
      .sort({ date: -1 })
      .limit(quantity)
      .exec();

    return activities;
  } catch (err) {
    console.log(err);

    throw new Error('Error while fetching employee activities');
  }
};

export const searchActivities = async (employeeId, year, month) => {
  try {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0);

    const startDay = start.getDate() < 10 ? `0${start.getDate()}` : String(start.getDate())
    const startMonth = (start.getMonth() + 1) < 10 ? `0${start.getMonth() + 1}` : String(start.getMonth() + 1)  
    const startYear = String(start.getFullYear())

    const endDay = end.getDate() < 10 ? `0${end.getDate()}` : String(end.getDate())
    const endMonth = (end.getMonth() + 1) < 10 ? `0${end.getMonth() + 1}` : String(end.getMonth() + 1)  
    const endYear = String(end.getFullYear())

    const startDatetxt = `${startYear}-${startMonth}-${startDay}`;
    const endDatetxt = `${endYear}-${endMonth}-${endDay}`;

    const activities = await EmployeeActivity.find({
      employeeId: employeeId,
      date: {
        $gte: startDatetxt, 
        $lte: endDatetxt,   
      },
    })
    .sort({ date: 1 });  

    return activities;
  } catch (err) {
    console.error('Error fetching activities:', err);
    throw new Error('Error fetching employee activities');
  }
};

