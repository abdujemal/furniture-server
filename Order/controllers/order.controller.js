import * as Services from "../services/order.service.js"
import { LIMIT } from "../../core/constants.js"

export const addOrder = async (req, res) => {
    try{
        const result = await Services.addOrder(req.body)
        res.status(200).json({msg: "created successfully", result});
    }catch(error){
        res.status(500).json({error});
    }
};

export const getOrders = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default page is 1
    const limit = parseInt(req.query.limit) || LIMIT; // Default limit is 10
    try{
        const result = await Services.getOrders(page, limit)
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error});
    }
};