import admin from "firebase-admin";
import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync('./adminKey.json', 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://osman-furniture-project-default-rtdb.firebaseio.com",
  storageBucket: "osman-furniture-project.appspot.com",
});


export const bucket = admin.storage().bucket();
