import { ObjectId } from "mongodb";
import mongoose, { Schema, InferSchemaType } from "mongoose";

export const workoutSchema = new Schema({
    title: String,
    description: { type: String },
    userId: { type: ObjectId, ref: "users" },
    createdAt: { type: Date, default: Date.now, required: false },
});

export type Workout = InferSchemaType<typeof workoutSchema>;

export const WorkoutModel = mongoose.model<Workout>("workouts", workoutSchema);
