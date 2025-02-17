import * as Services from "../services/order.service.js"
import { LIMIT } from "../../core/constants.js"

export const addOrder = async (req, res) => {
    try{
        const result = await Services.addOrder(req.body)
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({error});
    }
};

export const updateOrder = async (req, res) => {
    try{
        const { id } = req.params;

        const result = await Services.updateOrder(req.body, id)
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({error});
    }
};

export const getOrders = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default page is 1
    const limit = parseInt(req.query.limit) || LIMIT; // Default limit is 10
    const status = req.query.status || null;
    const asc = req.query.asc || 1;

    try{
        const result = await Services.getOrders(page, limit, status, asc == 1)
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error});
    }
};

export const getOrdersbyMonth = async (req, res) => {
    try{
        const { year, month } = req.query

        if(!year && !month){
            res.status(400).json({msg: "Missing Data!"})
        }

        const result = await Services.getOrdersbyMonth(parseInt(year), parseInt(month))
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error});
    }
}

export const getOrder = async (req, res) => {
    try{
        const { id } = req.params;

        const result = await Services.getOrder(id)
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({error});
    }
};

export const getOrdersByKv = async (req, res) => {
    try{
        const { key, value } = req.query;

        const result = await Services.getOrdersBykv(key, value)
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error});
    }
};

export const deleteOrder = async (req, res) => {
    try{
        const { id } = req.params;

        const result = await Services.deleteOrder(id)
        res.status(200).json({msg: "Order deleted"});
    }catch(error){
        res.status(500).json({error});
    }
};