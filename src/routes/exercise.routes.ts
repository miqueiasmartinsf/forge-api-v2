import express from "express";

import { ExerciseController } from "../controllers/exercise.controller";

export const router = express.Router();

router.get("/exercises", ExerciseController.index);
router.get("/exercises/:id", ExerciseController.showById);
router.get("/exercises/musculargroup/:id", ExerciseController.showByMuscularGroupId);
router.get("/exercises/search/:query",ExerciseController.showByQuerySearch)
router.post("/exercises",ExerciseController.storage);