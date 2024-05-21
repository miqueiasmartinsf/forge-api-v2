import express from "express";
import { verifyJWT } from "../middlewares/verifyJWT";
import { WorkoutController } from "../controllers/workoutController";

export const router = express.Router();

router.use(verifyJWT);

router.get("/workouts", WorkoutController.showByUserId);
router.get("/workouts/:id", WorkoutController.showByWorkoutId);
router.post("/workouts", WorkoutController.storage);
router.delete("/workouts/:id", WorkoutController.deleteById);