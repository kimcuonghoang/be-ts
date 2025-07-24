import express from "express";
import { authRegister } from "./users.controller.ts";

const usersRouter = express.Router();

usersRouter.post("/register", authRegister);

export default usersRouter;
