import express from "express";
import { authRegister } from "./auth.controller.ts";

const authRouter = express.Router();

authRouter.post("/register", authRegister);

export default authRouter;
