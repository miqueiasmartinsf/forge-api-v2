import { Request, Response } from "express";
import { WorkoutRepository } from "../repositories/workoutRepository";
import { MongoError, ObjectId } from "mongodb";
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

    static async showByWorkoutId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const response = await WorkoutRepository.findByWorkoutId(id);
            res.status(200).json({ response });
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async storage(req: Request, res: Response) {
        const { title, description } = req.body;

        const token = req.headers["authorization"] as string;
        const decoded = <JwtPayload>jsonwebtoken.decode(token);
        const userId = decoded.id;
        console.log(`TOKEN ID: ${userId}`);
        try {
            const response = await WorkoutRepository.create({
                title,
                description,
                userId,
            });

            console.log(response);

            res.status(200).json({
                message: "sucess",
            });
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async deleteById(req: Request, res: Response){
        const {id} = req.params;
        try{
            
            const verifyAuthenticity  = await WorkoutRepository.findByWorkoutId(id);
            
            const token = req.headers["authorization"] as string;
            const decoded = <JwtPayload>jsonwebtoken.decode(token);
            const userId = decoded.id;

            console.log(decoded);
            console.log(verifyAuthenticity);

            if(verifyAuthenticity && verifyAuthenticity.userId == userId){
                const response = await WorkoutRepository.deleteById(id);
                if(response){
                    res.status(200).json({message:"Workout removed with sucess"});
                }
            }else{
                res.status(400).json({message:"error"});
            }            
            
        }catch(error){
            if(error instanceof MongoError){
                res.status(400).json(error.message);
            }
        }
    }
}
