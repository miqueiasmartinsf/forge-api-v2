import { Request, Response } from "express";
import { MongoError, ObjectId } from "mongodb";
import { SetRepository } from "../repositories/set.repository";
import { ExerciseRepository } from "../repositories/exercise.repository";
import { Exercise } from "../models/Exercise";
import { Types } from "mongoose";

type exerciseIdType = {
    exerciseId: string;
};

export class SetController {
    static async showByWorkoutId(req: Request, res: Response) {
        const { id } = req.params;
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
        const { workoutId, setExercisesIds } = req.body;

        try {
            const exercises = setExercisesIds.map((item: string) => {
                return { exercise: new ObjectId(item) };
            });

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

    static async updateSet(req: Request, res: Response) {
        const { id } = req.params;
        const { exercisesData } = req.body;

        try {
            const response = await SetRepository.updateSet(id, exercisesData);
            res.status(200);
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }
}
