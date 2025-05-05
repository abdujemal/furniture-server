import Product from "../models/product.model.js"
import { uploadMultipleFiles, deleteFolder, deleteFile } from "../../core/services/main.service.js";

export const addProduct = async (data, images, files) => { 
    try{
        const product = new Product(data);

        product.relatedFiles = data.relatedFiles;
        product.images = data.images ?? [];
        product.tags = data.tags;
        product.rawMaterials = JSON.parse(`[${data.rawMaterials.replace("(", '').replace(")", '')}]`);
        product.rawMaterialIds = data.rawMaterialIds;

        // console.log(images?.length);
        // console.log(files?.length);

        if(images != null && images?.length != 0){
            const fileUrls = await uploadMultipleFiles(images, 'products', product._id, "ProductImage");
            // const fileUrls = await uploadFile(images[0], 'products', product._id);
            product.images = fileUrls;
            // console.log(product.images);
        }
        
        if(files != null && files?.length != 0){
            const fileUrls = await uploadMultipleFiles(files, 'products', product._id, "RelatedFile");
            product.relatedFiles = fileUrls;
            // console.log(product.relatedFiles);
        }

        await product.save();
        return product;
    }catch(error){
        console.log(error);

        throw new Error(`Error adding product`);
    }
};

// export const getProducts = async () => {
//     const products = await Product.find();
//     return products;
// };

// Get products with filters
export const  getProducts = async (quantity,  category, page) => {
  const filters = {};
//   if (quantity !== undefined) filters.quantity = { $gte: quantity };
  if (category) filters.category = category;

  const skip = (page - 1) * quantity;

  try {
    const products = await Product.find(filters).skip(skip).limit(quantity).sort({ createdAt: -1 }).exec();
    console.log({products});
    return products;
  } catch (error) {
    console.log(error);

    throw new Error('Error fetching products');
  }
}

// Search products based on key-value and limit the results
export const updateProduct = async (productId, data, images = [], files = [])=> {

  try {
    var relatedFileUrls = Array.isArray(data.relatedFiles) ? data.relatedFiles : data.relatedFiles ?  [data.relatedFiles] : [];
    var imageUrls = Array.isArray(data.images) ? data.images : data.images ? [data.images] : [];
    var tags = Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [];
    // var rawMaterials = JSON.parse(`[${data.rawMaterials.replace("(", '').replace(")", '')}]`);
    var rawMaterials = JSON.parse(data.rawMaterials);
    var rawMaterialIds = Array.isArray(data.rawMaterialIds) ? data.rawMaterialIds : data.rawMaterialIds ? [data.rawMaterialIds] : [];

    console.log(images?.length);
    console.log(files?.length);    

    if(images != null && images?.length > 0){        
        // deleteing images
        console.log({imageUrls});
        console.log({tags});
        console.log({rawMaterialIds});

        for(var i = 0; i < imageUrls.length; i++){
          console.log({imageUrl: imageUrls[i]});
          await deleteFile(imageUrls[i], true);
        }

        const fileUrls = await uploadMultipleFiles(images, 'products', productId, "ProductImage");
        // const fileUrls = await uploadFile(images[0], 'products', productId);
        imageUrls = fileUrls;
        console.log(imageUrls);
    }
    
    if(files != null && files?.length > 0){
        // deleteing images
        for(var i = 0; i < relatedFileUrls.length; i++){
          await deleteFile(relatedFileUrls[i], true);
        }

        const fileUrls = await uploadMultipleFiles(files, 'products', productId, "RelatedFile",  true);
        relatedFileUrls = fileUrls;
        console.log(relatedFileUrls);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { ...data, images: imageUrls, relatedFiles: relatedFileUrls, tags, rawMaterials, rawMaterialIds },
      { new: true } // Return updated document
    );
    return updatedProduct;
  } catch (error) {
    console.log(error);

    throw new Error('Error updating product');
  }
}

export const searchProducts = async (key, value, length)=> {
  const searchCriteria = {};
  if (key === "tags") {
    searchCriteria[key] = { $in: [value] };
  } else {
    searchCriteria[key] = { $regex: value, $options: 'i' };
  }
  
  try {
    const products = await Product.find(searchCriteria).limit(length).exec();
    console.log({products});
    return products;
  } catch (error) {
    console.log(error);

    throw new Error('Error searching products');
  }
}

// Update product information and files

// Delete product by ID
export const  deleteProduct = async (productId) =>{
  try {
    await deleteFolder(`Products/${productId}`);
    await Product.findByIdAndDelete(productId);

  } catch (error) {
    console.log(error);

    throw new Error('Error deleting product');
  }
}
