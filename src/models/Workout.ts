import { ObjectId } from "mongodb";
import mongoose, { Schema, InferSchemaType } from "mongoose";

export const workoutSchema = new Schema({
    _id: { type: ObjectId },
    title: String,
    description: { type: String },
    userId: { type: ObjectId },
    createdAt: { type: Date, default: Date.now, required: false },
});

export type Workout = InferSchemaType<typeof workoutSchema>;

export const WorkoutModel = mongoose.model<Workout>("workouts", workoutSchema);
