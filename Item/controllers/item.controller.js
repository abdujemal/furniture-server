import * as Services from "../services/item.service.js"

export const addItem = async (req, res) => {
    try{
        const res = await Services.addItem(res.body)
        res.status(200).json({res});
    }catch(error){
        res.status(500).json({error});
    }
};

export const getItems = async (req, res) => {
    try{
        const res = await Services.getItems()
        res.status(200).json({res});
    }catch(error){
        res.status(500).json({error});
    }
};