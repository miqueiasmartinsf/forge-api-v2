import mongoose, { Schema, Document, InferSchemaType } from "mongoose";

export const userSchema = new Schema({
    id: {type:String, unique:true},
    name: String,
    email: {type:String, unique:true},
    password: String,
    profilePic: String,
    createdAt: { type: Date, default: Date.now, required:false },
});

export type User = InferSchemaType<typeof userSchema>;

export const UserModel = mongoose.model<User>("users", userSchema);
