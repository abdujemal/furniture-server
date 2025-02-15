import Customer from '../models/customer.model.js'

export const addCustomer = async (data) => {
    try {
        const customer = new Customer(data);
        await customer.save();
        return customer;

    } catch (error) {
      console.log(error);
  
      throw new Error('Error adding Customer');
    }
};

export const  getCustomers = async (quantity, page)=> {
    try {
        const skip = (page - 1) * quantity;
        return await Customer.find().skip(skip).limit(quantity).exec();

    } catch (error) {
      console.log(error);
  
      throw new Error('Error getting Customers');
    }
}

export const  searchCustomers = async (key, value, length = 10)=> {
    try {
        const query = {};
        query[key] = { $regex: value, $options: 'i' };
        return await Customer.find(query).limit(length);

    } catch (error) {
      console.log(error);
  
      throw new Error('Error searching Customers');
    }
}

export const  updateCustomer = async (id, updateData) =>{
    try {
        return await Customer.findByIdAndUpdate(id, updateData, { new: true });

    } catch (error) {
      console.log(error);
  
      throw new Error('Error updating Customer');
    }
}

export const  deleteCustomer = async (id)=> {
    try {
        return await Customer.findByIdAndDelete(id);
        
    } catch (error) {
      console.log(error);
  
      throw new Error('Error deleting Customer');
    }
}

