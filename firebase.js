import admin from "firebase-admin";

import serviceAccount from "./adminKey.json" assert { type: 'json' };;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://osman-furniture-project-default-rtdb.firebaseio.com",
  storageBucket: "osman-furniture-project.appspot.com",
});


export const bucket = admin.storage().bucket();
