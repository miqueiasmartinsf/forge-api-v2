import express from "express";
import { logger } from "./middlewares/logger";

import { router as authRouter } from "./routes/authRoutes";

export const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.use(authRouter);
app.use(logger);