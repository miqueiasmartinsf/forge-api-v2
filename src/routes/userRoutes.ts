import express from "express";
import { verifyJWT } from "../middlewares/verifyJWT";
import { UserController } from "../controllers/userController";

export const router = express.Router();

router.use(verifyJWT);

router.get("/users/me", UserController.showUser);
router.get("/users", () => {});
router.get("/user/email", () => {});
