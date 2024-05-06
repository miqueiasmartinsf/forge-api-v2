import express from "express";
import cors from "cors";

import { router as authRouter } from "./routes/authRoutes";
import { router as exerciseRouter } from "./routes/exerciseRoutes";
import { router as userRouter } from "./routes/userRoutes";
import { router as workoutRoutes } from "./routes/WorkoutRoutes";
import { router as setRoutes } from "./routes/setRoutes";

import { logger } from "./middlewares/logger";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.use(authRouter);
app.use(exerciseRouter);
app.use(userRouter);
app.use(workoutRoutes);
app.use(setRoutes);
