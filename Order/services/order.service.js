import Order from "../models/order.model.js"

export const addOrder = async (data) => {
    const order = new Order(data);
    await order.save();
    return order;
};

export const getOrders = async (page, quantity) => {
    const skip = (page - 1) * quantity;
    const orders = await Order.find().skip(skip).limit(quantity).exec();
    return orders;
};