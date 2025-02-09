import { LIMIT } from "../../core/constants.js";
import * as Service from "../services/customer.service.js"

export const addCustomer = async (req,res) => {
    try{
        console.log(req.body);
        
        const result = await Service.addCustomer(req.body)
        res.status(200).json({msg: "created successfully", result});
    }catch(erro){
        res.status(500).json({erro});
    }
};

export const getCustomers = async (req,res) => {
    try{
        const page = parseInt(req.query.page) || 1; // Default page is 1
        const limit = parseInt(req.query.limit) // Default limit is 10

        const result = await Service.getCustomers(limit, page)
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error});
    }
};

export const  searchCustomers = async (req, res)=> {
   
    const limit = parseInt(req.query.limit) || LIMIT;
    const key = req.query.key || "name";
    const value = req.query.value;

    if(!value){
        res.status(400).json({error: "value is missing."});
    }

    try{
        const result = await Service.searchCustomers(key, value, limit)
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error});
    }
}

export const  updateCustomer = async (req, res) =>{
    const { id } = req.params;
    try{
        const result = await Service.updateCustomer(id, req.body)
        res.status(200).json({msg: "updated successfully", result});
    }catch(error){
        res.status(500).json({error});
    }
}

export const  deleteCustomer = async (req, res)=> {
    const { id } = req.params;
    try{
        const result = await Service.deleteCustomer(id)
        res.status(200).json({msg: `${id} deleted successfully`});
    }catch(error){
        res.status(500).json({error});
    }
}