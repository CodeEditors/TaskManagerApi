import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    password:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
    },
});

const User= mongoose.model("User", userSchema);
export default User;