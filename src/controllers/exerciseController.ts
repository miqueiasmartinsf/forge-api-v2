import { Request, Response } from "express";
import { ExerciseRepository } from "../repositories/exerciseRepository";
import { MongoError } from "mongodb";

export class ExerciseController {
    static async index(req: Request, res: Response) {}

    static async showById(req: Request, res: Response) {
        const { id } = req.params;
    }

    static async storage(req: Request, res: Response) {
        const {
            name,
            muscularGroup,
            muscularGroupId,
            description,
            imageUrl,
            gifUrl,
        } = req.body;

        try {
            const response = await ExerciseRepository.create({
                name,
                muscularGroup,
                muscularGroupId,
                description,
                imageUrl,
                gifUrl,
            });

            res.status(200).json(response);
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }
}
