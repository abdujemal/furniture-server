import { deleteFile, uploadFile } from "../../core/services/main.service.js";
import ItemModel from "../models/item.model.js"
import ItemHistory from "../models/item.history.model.js"

export const addItem = async (itemModel, file) => {
  try {
    const newItem = new ItemModel(itemModel);

    if (file) {
        const fileUrl = await uploadFile(file, 'Items', newItem._id);
        newItem.image = fileUrl;
    }

    await newItem.save();
    return newItem;
  } catch (err) {
    console.log(err);    
    throw new Error('Error adding item');
  }
};

export const getItems = async () => {
  try {
    return await ItemModel.find();
  } catch (err) {
    console.log(err);    
    throw new Error('Error retrieving items');
  }
};

export const updateItem = async (itemModel, file, itemId) => {
  try {
    if (file) {
      if(itemModel.image && itemModel.image.length > 0){
        await deleteFile(itemModel.image, true);
      }
      const fileUrl = await uploadFile(file, 'Items', itemId);
      itemModel.image = fileUrl;
    }

    const updatedItem = await ItemModel.findByIdAndUpdate(itemId, itemModel, { new: true });
    return updatedItem;
  } catch (err) {
    console.log(err);    
    throw new Error('Error updating item');
  }
};

export const  deleteItem = async (itemId) =>{
    try {
      const { image: url } = await ItemModel.find({_id: itemId});
      if(url && url.length > 0){
        await deleteFile(url, true);
      }
      await ItemModel.findByIdAndDelete(itemId);
      await deleteHistories(itemId)
  
    } catch (error) {
      console.log(error);      
      throw new Error('Error deleting product');
    }
}

export const getItemHistories = async (quantity, page, itemId) => {
  try {
   
    // If isNew is true, fetch the most recent item histories
    const skip = (page - 1) * quantity;

    const itemHistories = await ItemHistory.find()
      .sort({ date: -1 })  // Sort by most recent first
      .skip(skip)
      .limit(quantity)
      .exec();  // Limit the number of records

    return itemHistories;
  } catch (error) {
    console.error('Error fetching item histories:', error);
    throw new Error('Error fetching item histories');
  }
};

export const addItemHistory = async (itemHistoryModel) => {
  try {
    console.log({itemHistoryModel});
    
    const newItemHistory = new ItemHistory(itemHistoryModel);

    await newItemHistory.save();  // Save the item history to the database

    return newItemHistory;
  } catch (error) {
    console.error('Error adding item history:', error);
    throw new Error('Error adding item history');
  }
};

export const deleteHistories = async (itemId) => {
  try {
    await ItemHistory.deleteMany({itemId: itemId})

  } catch (error) {
    console.error('Error adding item history:', error);
    throw new Error('Error adding item history');
  }
};