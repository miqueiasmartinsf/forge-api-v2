import { User } from "../models/User";
import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export class UserController {
    static async showUser(req: Request, res: Response) {
        const token = req.headers["authorization"] as string;
        const decoded = <JwtPayload>jsonwebtoken.decode(token);
        

    }
}
