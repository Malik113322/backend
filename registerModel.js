import mongoose from "mongoose";

// register schema 

const registerSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    },
    
});

export default mongoose.model("register", registerSchema);