import mongoose, { Schema, InferSchemaType } from "mongoose";

export const exerciseSchema = new Schema({
    id: { type: String },
    name: String,
    muscularGroup: String,
    muscularGroupId:String,
    description:String,
    imageUrl:String,
    gifUrl:String,
    createdAt: { type: Date, default: Date.now, required: false },
});

export type Exercise = InferSchemaType<typeof exerciseSchema>;

export const ExerciseModel = mongoose.model<Exercise>("exercises", exerciseSchema);
