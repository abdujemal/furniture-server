import Product from "../models/product.model.js"
import { uploadFile, uploadMultipleFiles } from "../../core/services/main.service.js";

export const addProduct = async (data, images, files) => { 
    
    const product = new Product(data);

    product.relatedFiles = String(data.relatedFiles).length == 0 ? [] : data.relatedFiles?.split(',');
    product.images = data.images?.split(',');
    product.tags = data.tags.split(',');
    product.rawMaterials = JSON.parse(`[${data.rawMaterials}]`);
    product.rawMaterialIds = data.rawMaterialIds.split(',');

    console.log(images?.length);
    console.log(files?.length);


    if(images != null || images?.length != 0){
        const fileUrls = await uploadMultipleFiles(images, 'products', product._id, "ProductImage");
        // const fileUrls = await uploadFile(images[0], 'products', product._id);
        product.images = fileUrls;
        console.log(product.images);
        
    }

    if(files != null || files?.length != 0){
        const fileUrls = await uploadMultipleFiles(files, 'products', product._id, "RelatedFile");
        product.relatedFiles = fileUrls;
        console.log(product.relatedFiles);

    }

    await product.save();
    return product;
};

export const getProducts = async () => {
    const products = await Product.find();
    return products;
};