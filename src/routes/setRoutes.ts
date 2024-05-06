import express from "express";
import { verifyJWT } from "../middlewares/verifyJWT";
import { SetController } from "../controllers/setContoller";

export const router = express.Router();

router.use(verifyJWT);

router.get("/sets/:id", SetController.showByWorkoutId);
router.post("/sets", SetController.storage);
