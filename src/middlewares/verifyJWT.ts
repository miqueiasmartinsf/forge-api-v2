import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";
import { UnauthorizedError } from "../errors/httpError";

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const privateKey = process.env.JWT_SECRET_KEY;
    const token = req.headers["authorization"] as string;
    try {
        if (token) {
            jsonwebtoken.verify(token, <string>privateKey, (error, decoded) => {
                if (error) return res.status(401).json(new UnauthorizedError());
                next();
            });
        } else {
            return res.status(401).json(new UnauthorizedError());
        }
    } catch (error) {
        console.log(error);
    }
};
