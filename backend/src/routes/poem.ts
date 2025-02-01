import { HfInference } from "@huggingface/inference";
import express from "express";
import { userMiddleware } from "../middlewares";

export const poemRouter = express.Router();

poemRouter.use(userMiddleware);

poemRouter.post("/", async(req: any, res: any) => {

    const hf = new HfInference(process.env.HUGGINGFACE_API);

    try{

        const chatCompletion = await hf.chatCompletion({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                {
                    role: "user",
                    content: "Be a poet and write a poem about rain"
                }
            ],
            provider: "sambanova",
            max_tokens: 500
        });
        console.log(chatCompletion.choices[0].message.content);
        return res.status(200).json(chatCompletion.choices[0].message.content);
    }catch(e){
        return res.status(400).json({
            error: "Failed to generate poem",
            details: e
        })
    }
})