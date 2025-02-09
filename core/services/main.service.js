import { bucket } from '../../firebase.js';
import  path from 'path';
import { v4 as uuidv4 } from 'uuid';

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

export const uploadMultipleFiles = async (files, folderName, collectiveName, fileType) => {
    // Prepare an array to hold the uploaded file URLs
    const fileUrls = [];

    // Process each uploaded file
    for (let i = 0; i < files.length; i++) {        
        const fileName = `${folderName}/`+ `${collectiveName}/` + fileType + i + path.extname(files[i].originalname); // Unique file name
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