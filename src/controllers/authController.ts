import { Request, Response } from "express";
import { emailValidator } from "../utils/emailValidator";
import { MongoError } from "mongodb";
import { authRepository } from "../repositories/authRepository";
import bcrypt from "bcrypt";
import { User } from "../models/User";
import * as httpError from "http-errors";

type controllerParam = {
    req: Request;
    res: Response;
};

export class AuthController {
    static async login({ req, res }: controllerParam) {
        console.log(req);
    }

    static async register(req:Request,res:Response) {
        
        let { name, email, password, confirmPassword } = req.body;

        try {
            if (!emailValidator(email)) {
                res.json({ message: "Invalid email address" }).status(400);
                return;
            } else if (password !== confirmPassword) {
                res.json({ message: "Passwords does not match" }).status(400);
            }

            password = await bcrypt.hash(password, 5);

            const user: User = {
                name,
                email,
                password,
            };

            const repositoryRes = await authRepository.createUser(user);

        } catch (error) {
            if (error instanceof MongoError) {
                res.json(error.message).status(400);
            }
        }
    }
}
