import { ObjectId } from "mongodb";
import mongoose, { Schema, InferSchemaType } from "mongoose";

export const exerciseSchema = new Schema({
    _id: { type: ObjectId },
    name: String,
    muscularGroup: String,
    muscularGroupId: String,
    description: String,
    imageUrl: String,
    gifUrl: String,
    createdAt: { type: Date, default: Date.now, required: false },
});

export type Exercise = InferSchemaType<typeof exerciseSchema>;

export const ExerciseModel = mongoose.model<Exercise>("exercises",exerciseSchema);
