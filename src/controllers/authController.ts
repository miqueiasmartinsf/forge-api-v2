import { Request, Response } from "express";
import { emailValidator } from "../utils/emailValidator";
import { MongoError } from "mongodb";
import { authRepository } from "../repositories/authRepository";
import { UserRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import { User } from "../models/User";
import jsonwebtoken from "jsonwebtoken";
import {
    EmailInUseError,
    UserNotFound,
    InvalidEmail,
    AuthenticationError,
} from "../errors/httpError";

export class AuthController {
    static async login(req: Request, res: Response) {
        let { email, password } = req.body;

        try {
            const userData = await UserRepository.loadUserByEmail(email);

            if (userData && userData.password) {
                const passwordVerify = await bcrypt.compare(
                    password,
                    userData.password
                );

                if (passwordVerify === true) {
                    const privateKey = process.env.JWT_SECRET_KEY;
                    const id = userData._id;
                    console.log(userData);
                    const token = jsonwebtoken.sign({ id }, `${privateKey}`);

                    res.status(200).json({
                        message: "sucess",
                        authToken: token,
                        auth: true,
                    });
                } else {
                    res.status(400).json(new UserNotFound());
                }
            } else {
                res.status(400).json(new UserNotFound());
                return;
            }
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }

    static async register(req: Request, res: Response) {
        let { name, email, password, confirmPassword } = req.body;

        const userExists = await UserRepository.userExists(email);

        try {
            if (!emailValidator(email)) {
                res.status(400).json(new InvalidEmail());
                return;
            } else if (password !== confirmPassword) {
                res.status(400).json(new AuthenticationError());
                return;
            } else if (userExists) {
                res.status(400).json(new EmailInUseError());
                return;
            }

            password = await bcrypt.hash(password, 5);

            const user: User = {
                name,
                email,
                password,
            };

            const repositoryRes = await authRepository.createUser(user);

            res.status(200).json({
                message: "User created with sucess",
                auth: true,
            });
        } catch (error) {
            if (error instanceof MongoError) {
                res.status(400).json(error.message);
            }
        }
    }
}
