import { ObjectId } from "mongodb";
import mongoose, { Schema, InferSchemaType } from "mongoose";

const SetExerciesSchema = new Schema({
    exerciseId: ObjectId,
    repetitions: Number,
    sets: Number,
});

export const setSchema = new Schema({
    exercises: [{ type: SetExerciesSchema, ref: "exercises" }],
    workoutId: { type: ObjectId, ref: "workouts" },
});

export type Set = InferSchemaType<typeof setSchema>;

export const SetModel = mongoose.model<Set>("sets", setSchema);
