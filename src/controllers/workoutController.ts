import { Workout } from "../models/Workout";
import { Request, Response } from "express";
import { WorkoutRepository } from "../repositories/workoutRepository";
import { MongoError } from "mongodb";
import { JwtPayload } from "jsonwebtoken";
import jsonwebtoken from "jsonwebtoken";

export class WorkoutController {
    static async showByUserId(req: Request, res: Response) {
        try {
            const token = req.headers["authorization"] as string;
            const decoded = <JwtPayload>jsonwebtoken.decode(token);
            const response = await WorkoutRepository.findByUserId(decoded.id);
            res.status(200).json({ response });
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async storage(req: Request, res: Response) {
        const { title, description, userId } = req.body;

        try {
            const response = await WorkoutRepository.create({
                title,
                description,
                userId,
            });

            res.status(200).json({
                message: "sucess",
            });
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }
}
