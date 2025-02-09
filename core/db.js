import mongoose from "mongoose";

export const connectDb = async ()=>{
    const url = process.env.MONGO_DB_URL

    await mongoose.connect(url);
    console.log("connect to db");    
}