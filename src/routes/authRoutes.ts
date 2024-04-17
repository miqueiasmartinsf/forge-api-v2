import express from "express";
const router = express.Router();

import { authController } from "../controllers/authController";

router.post("/auth/login",authController.login);
router.post("/auth/register",authController.register);
