import express from "express";

import { ExerciseController } from "../controllers/exerciseController";

export const router = express.Router();

router.get("/exercises", ExerciseController.index);
router.get("/exercises/:id", ExerciseController.index);
router.post("/exercises",ExerciseController.storage);