import { log } from 'console';
import { bucket } from '../../firebase.js';
import  path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { randomInt } from 'crypto';
import mongoose from 'mongoose';

export const uploadFile = async (myFile, folderName, myFileName) => {

    const fileName = `${folderName}/`+ myFileName + path.extname(myFile.originalname); // Unique file name
    
    // Create a reference to the file in Firebase Storage
    const fileRef = bucket.file(fileName);

    // Upload the file buffer directly to Firebase Storage
    await fileRef.save(myFile.buffer, {
        metadata: {
            contentType: myFile.mimetype,
            firebaseStorageDownloadTokens: uuidv4(),
        },
    });

    const fileUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(fileRef.name)}?alt=media`;

    // const fileUrl = `https://storage.googleapis.com/${bucket.name}/${folderName}/${file.name}`;

    return fileUrl;

}

export const uploadMultipleFiles = async (files, folderName, collectiveName, fileType, useOriginalName = false) => {
    // Prepare an array to hold the uploaded file URLs
    const fileUrls = [];

    // Process each uploaded file
    for (let i = 0; i < files.length; i++) {   

        const num = randomInt(1000, 9999);
        var fileName = '';        
        if(!useOriginalName){
            fileName = `${folderName}/`+ `${collectiveName}/` + fileType + `${num}` + i + path.extname(files[i].originalname); // Unique file name       
        }else{
            fileName = `${folderName}/`+ `${collectiveName}/` + files[i].originalname; // Unique file name
        }   
        // Create a reference to the file in Firebase Storage
        const fileRef = bucket.file(fileName);

        // Upload the file buffer directly to Firebase Storage
        await fileRef.save(files[i].buffer, {
            metadata: {
                contentType: files[i].mimetype,
                firebaseStorageDownloadTokens: uuidv4(),
            },
        });

        // Construct the public URL for the file
        const fileUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(fileRef.name)}?alt=media`;

        // Get the file URL and add it to the fileUrls array
        //   const fileUrl = `https://storage.googleapis.com/${bucket.name}/${folderName}/${collectiveName}/${file.name}`;

      fileUrls.push(fileUrl);
    }

    return fileUrls;
}

export const deleteFile = async (fileName, isUrl = false) => {
    if(isUrl){
        fileName = getFilePathFromDownloadUrl(fileName);
    }
    // Create a reference to the file to delete
    const fileRef = bucket.file(fileName);

    // Delete the file
    await fileRef.delete();
}

export const deleteFolder = async (folderName) => {
    // Create a reference to the file to delete
    const [files] = await bucket.getFiles({ prefix: folderName })

    if (files.length === 0) {
        throw('No files found in the folder.');
    }

    const deletePromises = files.map(file => file.delete());

    // Delete the file
    await Promise.all(deletePromises);
}

export const getFilePathFromDownloadUrl = (downloadUrl) =>{
    console.log({downloadUrl});  
    const url = new URL(downloadUrl);
    const path = decodeURIComponent(url.pathname.split('/o/')[1]);
    console.log({path});    
    return path;
}

export const searchFromListKey = async (col, field, innerField, value) =>{
    try{
        if(value && value.length == 0){
            return [];
        }
        var query = {};
        if(field && value){
            query[field] = {
                  $elemMatch: {}
                };   
            query[field]["$elemMatch"][innerField] = value;       
        }

        console.log(query);        
    
        const res = await mongoose.connection
                    .collection(col) // Use your collection name
                    .find(query)
                    .toArray();  // Convert the cursor to an array
        
        console.log(res);
        return res

    }catch{
        console.error(error);
        throw new Error('Error in search');
    }
}

export const searchAll = async (col, key, val, key2, val2, isSearch = false, isArray = false, limit) =>{
    try{


        var query = {};
        if(key && val){
            if(isSearch){
                query[key] = { $regex: val, $options: 'i' };
            }else{
                query[key] = val;
            }
        }
        
        if(key2 && val2) query[key2] = val2;
        
        if(isArray) query[key] = { $in: [val]  }; // case insensitive
    
        const limitn = parseInt(limit)
        
        console.log({col});
        console.log({query});
        console.log({limit});
    
        const res = limit ?  
            await mongoose.connection
                .collection(col) // Use your collection name
                .find(query)
                .limit(limitn)
                .toArray(): 
            await mongoose.connection
                .collection(col) // Use your collection name
                .find(query)
                .toArray();  // Convert the cursor to an array
    
    
        console.log(res);
    
        return res
    }catch(err){
        console.error(error);
        throw new Error('Error in search');
    }

}

export const countDocs = async (col, key, startDate, endDate, val) => {
    try {
        var query = {}

        if(startDate && endDate){
            query[key] = {
                $gte: startDate, 
                $lte: endDate,   
            }
        }

        if(val){
            query[key] = val
        }

        const res = await mongoose.connection
                .collection(col)
                .countDocuments(query);
                
  
        return res;
    } catch (err) {
        console.error('Error counting:', err);
        throw new Error('Error Counting');
    }
  };

export const getChartData = async (col, opt) =>{
    try{

        var projection = {}
    
       
    
        if(opt && opt.length > 0){
            for(var op in opt){
                projection[opt[op]] = 1;
            }
        }
    
        console.log({projection});
        console.log({col});
        
        const res = 
            await mongoose.connection
            .collection(col) // Use your collection name
            .find({}, {projection})
            .toArray();// Convert the cursor to an array
        
        console.log({res});
        return res

    }catch(err){
        console.error('Error getting chart data', error);
        throw new Error('Error getting chart data');
    }

}

