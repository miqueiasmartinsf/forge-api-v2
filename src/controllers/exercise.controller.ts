import { Request, Response } from "express";
import { ExerciseRepository } from "../repositories/exercise.repository";
import { MongoError, ObjectId } from "mongodb";

export class ExerciseController {
    static async index(req: Request, res: Response) {
        try {
            const response = await ExerciseRepository.findAll();
            res.status(200).json(response);
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async showById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const response = await ExerciseRepository.findById(id);
            res.status(200).json(response);
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async showByMuscularGroupId(req: Request, res: Response) {
        let { id } = req.params;
        try {
            const response = await ExerciseRepository.findByMuscularGroupId(id);
            res.status(200).json(response);
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async showByQuerySearch(req: Request, res: Response) {
        const { query } = req.params;
        try {
            const response = await ExerciseRepository.findByQuerySearch(query);
            res.status(200).json(response);
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
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
