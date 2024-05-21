import { ObjectId } from "mongodb";
import mongoose, { Schema, InferSchemaType } from "mongoose";
import { exerciseSchema, Exercise } from "./Exercise";

const SetExerciesSchema = new Schema({
    exercise: exerciseSchema,
    repetitions: Number,
    sets: Number,
});

export const setSchema = new Schema({
    exercisesData: [{ type: SetExerciesSchema, ref: "exercises" }],
    workoutId: { type: ObjectId, ref: "workouts" },
    createdAt: { type: Date, default: Date.now, required: false },
});


export type Set = InferSchemaType<typeof setSchema>;

export const SetModel = mongoose.model<Set>("sets", setSchema);
