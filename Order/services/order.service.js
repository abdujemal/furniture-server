import Order from "../models/orderN.model.js"

export const addOrder = async (data) => {
    try{
        const order = new Order(data);
        await order.save();
        return order;
        
    }catch(error){
        console.error('Error adding order', error);
        throw new Error('Error adding order');
    }
};

export const updateOrder = async (data, id) => {
    try{
        const order = await Order.findByIdAndUpdate(id, data, { new: true });
        return order;
    }catch(error){
        console.error('Error updating order', error);
        throw new Error('Error updating order');
    }
};

export const getOrders = async (page, quantity, status, asc) => {
    try{
        var query = {};
        if (status) {
            query = { status: { $in: status.split(",") } };
        }
        const skip = (page - 1) * quantity;
        const orders = await Order.find(query)
                        .skip(skip)
                        .sort({ finishedDate: asc ? 1 : -1 })
                        .limit(quantity).exec();
        return orders;

    }catch(error){
        console.error('Error getting orders', error);
        throw new Error('Error getting orders');
    }
};

export const getOrder = async (id) => {
    try{

        const orders = await Order.findOne({_id: id});
        return orders;
    }catch(error){
        console.error('Error getting order', error);
        throw new Error('Error getting order');
    }
};

export const getOrdersBykv = async (key, value) => {
    try{
        var query = {}
        if(key && value){
            query[key] = value;
        }
        const orders = await Order.find(query);
        return orders;

    }catch(error){
        console.error('Error getOrdersBykv', error);
        throw new Error('Error getting Orders By kv');
    }
};

export const getOrdersbyMonth = async (year, month) => {
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
  
      const orders = await Order.find({
        finishedDate: {
          $gte: startDatetxt, 
          $lte: endDatetxt,   
        },
      })
      .sort({ date: 1 });  
  
      return orders;
    } catch (err) {
      console.error('Error fetching orders by time:', err);
      throw new Error('Error fetching orders by time');
    }
  };

export const deleteOrder = async (id) => {
    try{
        const orders = await Order.findByIdAndDelete(id);
        return orders;

    }catch(error){
        console.error('Error deleteOrder', error);
        throw new Error('Error deleting Order');
    }
};