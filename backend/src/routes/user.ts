import express from "express";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signinInput, signupInput } from "@surabhilssk/project-lyricraft";

export const userRouter = express.Router();

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DIRECT_DATABASE_URL,
        },
    },
}).$extends(withAccelerate());

userRouter.post("/signup", async (req: any, res: any) => {
    const body = req.body;
    const { success } = signupInput.safeParse(body);
    if(!success){
        return res.status(400).json({
            error: "Invalid input"
        });
    }
    const saltRounds = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);
    try{
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: hashedPassword,
                name: body.name,
            }
        });

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
        return res.status(200).json({
            jwt: token
        });

    }catch(e){
        res.status(400).json({
            error: "User already exists",
            details: e
        });
    }
});

userRouter.post("/signin", async(req: any, res: any) => {
    const body = req.body;
    const { success } = signinInput.safeParse(body);
    if(!success){
        return res.status(400).json({
            error: "Invalid input"
        });
    }
    try{
        const user = await prisma.user.findUnique({
            where:{
                email: body.email
            }
        });
        if(!user){
            return res.status(411).json({
                error: "User not found"
            });
        }
        const passwordMatch = await bcrypt.compare(body.password, user.password);
        if(!passwordMatch){
            return res.status(411).json({
                error: "Invalid password"
            });
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET!);
        return res.status(200).json({
            jwt: token
        })
    }catch(e){
        return res.status(400).json({
            error: "Something went wrong",
            details: e
        })
    }
})