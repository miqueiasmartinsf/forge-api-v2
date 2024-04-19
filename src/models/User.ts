import mongoose, { Schema, InferSchemaType } from "mongoose";

export const userSchema = new Schema({
    id: { type: String },
    name: String,
    email: { type: String, unique: true },
    password: { type: String, minLength: 5 },
    profilePic: String,
    createdAt: { type: Date, default: Date.now, required: false },
});

export type User = InferSchemaType<typeof userSchema>;

export const UserModel = mongoose.model<User>("users", userSchema);
