import { Request, Response } from "express";
import { emailValidator } from "../utils/emailValidator";
import { MongoError } from "mongodb";
import { authRepository } from "../repositories/authRepository";
import { UserRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import { User } from "../models/User";
import * as httpError from "http-errors";

type controllerParam = {
    req: Request;
    res: Response;
};

export class AuthController {
    static async login(req: Request, res: Response) {
        let { email, password } = req.body;

        const userData = await UserRepository.loadUserByEmail(email);

        if (userData && userData.password) {
            const passwordVerify = await bcrypt.compare(
                password,
                userData.password
            );

            if (passwordVerify === true) {
                res.json({ message: "sucess" }).status(200);
            } else {
                res.json({ message: "Incorrect password" });
            }
        } else {
            res.json({ message: "User not registered" });
            return;
        }
    }

    static async register(req: Request, res: Response) {
        let { name, email, password, confirmPassword } = req.body;

        const userExists = await UserRepository.loadUserByEmail(email);

        try {
            if (!emailValidator(email)) {
                res.json({ message: "Invalid email address" }).status(400);
                return;
            } else if (password !== confirmPassword) {
                res.json({ message: "Passwords does not match" }).status(400);
                return;
            } else if (userExists) {
                res.json({ message: "Email already in use" });
                return;
            }

            password = await bcrypt.hash(password, 5);

            const user: User = {
                name,
                email,
                password,
            };

            const repositoryRes = await authRepository.createUser(user);

            res.json({ message: "User created with sucess" }).status(200);
        } catch (error) {
            if (error instanceof MongoError) {
                res.json(error.message).status(400);
            }
        }
    }
}
