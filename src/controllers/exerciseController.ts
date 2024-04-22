import { Request, Response } from "express";

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
    }
}
