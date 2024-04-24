import express from "express";

import { ExerciseController } from "../controllers/exerciseController";

export const router = express.Router();

router.get("/exercises", ExerciseController.index);
router.get("/exercises/:id", ExerciseController.showById);
router.get("/exercises/musculargroup/:id",ExerciseController.showByMuscularGroupId);
router.post("/exercises",ExerciseController.storage);