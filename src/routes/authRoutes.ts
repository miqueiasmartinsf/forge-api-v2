import express from "express";
export const router = express.Router();

import { AuthController } from "../controllers/authController";

router.post("/auth/login",AuthController.login);
router.post("/auth/register",AuthController.register);

