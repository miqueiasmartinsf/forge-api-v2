import { Request, Response } from "express";
import { MongoError } from "mongodb";
import { SetRepository } from "../repositories/setRepository";
import { ExerciseRepository } from "../repositories/exerciseRepository";
import { Exercise } from "../models/Exercise";
import { Types } from "mongoose";

type exerciseIdType = {
    exerciseId: string;
};

export class SetController {
    static async showByWorkoutId(req: Request, res: Response) {
        const { id } = req.params;
        console.log(`workoutID: ${id}`);
        try {
            const response = await SetRepository.findByWorkoutId(id);

            res.status(200).json({
                setData: response,
            });
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async storage(req: Request, res: Response) {
        const { workoutId, exercises } = req.body;

        try {
            const exerciseIds: exerciseIdType[] = exercises;

            const response = await SetRepository.create({
                workoutId,
                exercisesData: exercises,
            });
            res.status(200).json(response);
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }
}
