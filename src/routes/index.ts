import express from "express";
import usersRouter from "../modules/users/users.routes";

const router = express.Router();

router.use("/auth", usersRouter);

export default router;
