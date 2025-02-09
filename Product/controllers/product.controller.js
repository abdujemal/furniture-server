
import * as Services from "../services/product.service.js"

export const addProduct = async (req, res) => {
    
    if (!req.files['images'] || req.files['images'].length === 0) {
        if(!req.body.images){
            return res.status(400).send('No files uploaded.');
        }
    }

    // try{
        const result = await Services.addProduct(req.body, req.files['images'], req.files['files']);
        res.status(200).json({result});
    // }catch(error){
    //     res.status(500).json({error});
    // }
};

export const getProducts = async (req, res) => {
    try{
        const result = await Services.getProducts()
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({error});
    }
};