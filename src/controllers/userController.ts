import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { UserRepository } from "../repositories/userRepository";
import { MongoError } from "mongodb";

export class UserController {
    static async showUser(req: Request, res: Response) {
        try {
            const token = req.headers["authorization"] as string;
            const decoded = <JwtPayload>jsonwebtoken.decode(token);
            const response = await UserRepository.findByUserId(decoded.id);
            res.status(200).json({
                message: "sucess",
                userData: response,
            });
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }
}
