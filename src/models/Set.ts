import { ObjectId } from "mongodb";
import mongoose, { Schema, InferSchemaType } from "mongoose";
import { exerciseSchema } from "./Exercise";

const SetExerciesSchema = new Schema({
    exerciseId: exerciseSchema,
    repetitions: Number,
    sets: Number,
    createdAt: { type: Date, default: Date.now, required: false },
});

export const setSchema = new Schema({
    exercisesData: [{ type: SetExerciesSchema, ref: "exercises" }],
    workoutId: { type: ObjectId, ref: "workouts" },
});


export type Set = InferSchemaType<typeof setSchema>;

export const SetModel = mongoose.model<Set>("sets", setSchema);
