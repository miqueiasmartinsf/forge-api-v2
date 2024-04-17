import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?:string;
    profilePic?: string;
}

export const userSchema = new Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    profilePic: String,
    createdAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model('User',userSchema);