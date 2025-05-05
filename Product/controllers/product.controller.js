
import * as Services from "../services/product.service.js"
import { LIMIT } from "../../core/constants.js"

export const addProduct = async (req, res) => {
    
    // if (!req.files['photos'] || req.files['photos'].length === 0) {
    //     if(!req.body.images){
    //         return res.status(400).send('No files uploaded.');
    //     }
    // }

    try{
        const result = await Services.addProduct(req.body, req.files['photos'], req.files['files']);
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({error});
    }
};

// export const getProducts = async (req, res) => {
//     try{
//         const result = await Services.getProducts()
//         res.status(200).json({result});
//     }catch(error){
//         res.status(500).json({error});
//     }
// };

// Get products
export const getProducts = async (req, res) =>{
    const { category } = req.query;
    
    const page = parseInt(req.query.page) || 1; // Default page is 1
    const limit = parseInt(req.query.limit) || LIMIT; // Default limit is 10

    // const { quantity, category, isNew } = req.query;
    try {
        const products = await Services.getProducts(limit, category, page);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Search products
export const searchProducts = async (req, res)=> {
  const { key, value, length } = req.query;
  try {
    const products = await Services.searchProducts(key, value, parseInt(length) ?? LIMIT);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update product
export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  
  try {
    const result = await Services.updateProduct(productId, req.body, req.files['photos'], req.files['files']);
    res.status(200).json({result});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete product
export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    await Services.deleteProduct(productId);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}