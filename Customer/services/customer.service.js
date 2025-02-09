import Customer from '../models/customer.model.js'

export const addCustomer = async (data) => {
    const customer = new Customer(data);
    await customer.save();
    return customer;
};

export const  getCustomers = async (quantity, page)=> {
    const skip = (page - 1) * quantity;
    return await Customer.find().skip(skip).limit(quantity).exec();
}

export const  searchCustomers = async (key, value, length = 10)=> {
    const query = {};
    query[key] = { $regex: value, $options: 'i' };
    return await Customer.find(query).limit(length);
}

export const  updateCustomer = async (id, updateData) =>{
    return await Customer.findByIdAndUpdate(id, updateData, { new: true });
}

export const  deleteCustomer = async (id)=> {
    return await Customer.findByIdAndDelete(id);
}

