import Item from "../models/item.model.js"

export const addItem = async (data) => {
    const item = new Item(data);
    await item.save();
    return item;
   
};

export const getItems = async () => {
    const items = await Item.find();
    return items;
};