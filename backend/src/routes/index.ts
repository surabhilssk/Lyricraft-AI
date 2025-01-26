import express from "express";
import { userRouter } from "./user";
import { poemRouter } from "./poem";

export const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/poemGen", poemRouter);