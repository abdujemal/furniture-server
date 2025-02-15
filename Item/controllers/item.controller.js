import { LIMIT } from "../../core/constants.js";
import * as Services from "../services/item.service.js"

export const addItem = async (req, res) => {
    
    try {

        const result = await Services.addItem(req.body, req.file);
        res.status(200).json({result});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
  
export const getItems = async (req, res) => {
    try {
        const items = await Services.getItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Services.updateItem(req.body, req.file, id);
        res.status(200).json({result});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteItem = async (req, res) => {
    const { itemId } = req.params;

    try {
        await Services.deleteItem(itemId);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getItemHistories = async (req, res) => {
    try {
        
        const page = parseInt(req.query.page) || 1; // Default page is 1
        const limit = parseInt(req.query.limit) || LIMIT; // Default limit is 10

        const items = await Services.getItemHistories(limit, page);
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addItemHistory = async (req, res) => {
    console.log(req.body);
    
    try {
        const result = await Services.addItemHistory(req.body);
        res.status(200).json({result});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};