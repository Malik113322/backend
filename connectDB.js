import mongoose from "mongoose";

// connect database 

const connectDatabase = async()=>{
    try {
        const db = await mongoose.connect("mongodb+srv://malik:KcaHfW7SqU9LznoV@cluster0.dxk5es2.mongodb.net/backend");
        console.log("mongodb working!");
    } catch (error) {
        console.log(error)
    }
}

export default connectDatabase;