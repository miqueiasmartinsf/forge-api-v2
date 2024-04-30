import { Request, Response } from "express";
import { MongoError } from "mongodb";
import { SetRepository } from "../repositories/setRepository";

export class SetController {
    static async showByWorkoutId(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const response = await SetRepository.findByWorkoutId(id);
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async storage(req: Request, res: Response) {
        const { workoutId, exercises } = req.body;

        try {
            const response = await SetRepository.create({
                workoutId,
                exercises,
            });
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }
}
