import express from "express";
import jwt from "jsonwebtoken";
const app = express();


export const userMiddleware = async(req: any, res: any, next: any) => {
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).json({
            error: "Authorization header doesn't exist"
        })
    }
    const token = header.split(" ")[1];
    if(!token){
        return res.status(401).json({
            error: "Token doesn't exist"
        });
    }
    try{
        const user = jwt.verify(token, process.env.JWT_SECRET || "");
        if(user && typeof user !== 'string'){
            req.userId = user.id;
            next();
        }
    }catch(e){
        return res.status(401).json({
            error: "Invalid token",
            details: e
        })
    }
}