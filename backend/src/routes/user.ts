import express from "express";

export const userRouter = express.Router();

userRouter.get("/",(req, res) => {
    res.status(200).json({
        message: "User Router work"
    })
})