import express from "express";

import cors from "cors";

import { router as authRouter } from "./routes/authRoutes";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.use(authRouter);

