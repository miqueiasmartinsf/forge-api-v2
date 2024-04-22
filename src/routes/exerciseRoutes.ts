import express from "express";

import { ExerciseController } from "../controllers/exerciseController";

const router = express.Router();

router.get("/exercises", ExerciseController.index);
router.get("//exercises/:id", ExerciseController.index);