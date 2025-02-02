import express from "express";
import { userMiddleware } from "../middlewares";
import { GoogleGenerativeAI,HarmCategory,HarmBlockThreshold } from "@google/generative-ai";

export const poemRouter = express.Router();
poemRouter.use(userMiddleware);

const apiKey = process.env.GEMINI_API;
const genAI = new GoogleGenerativeAI(String(apiKey));
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    generationConfig:{
        temperature: 1.5,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    }
});

const generateUniquePrompt = (topic: String) => {
    const variations = [
      `Write a fresh and imaginative poem about ${topic}, make it unique every time.`,
      `Compose a poem on ${topic} with a new perspective, avoiding repetition.`,
      `Generate a completely new poem about ${topic}, each time different from before.`,
      `Craft a unique and creative poem about ${topic}, ensuring originality.`,
      `Express the essence of ${topic} in a poetic form, with new words each time.`
    ];
    
    return variations[Math.floor(Math.random() * variations.length)];
  };

poemRouter.post("/", async(req: any, res: any) => {
    try{
        const { topic } = req.body;
        if(!topic){
            return res.status(400).json({
                error: "Topic is required"
            });
        }
        const prompt = generateUniquePrompt(topic);
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return res.status(200).json({
            poem: result.response.text()
        });
    }catch(e){
        return res.status(400).json({
            error: "Failed to generate poem",
            details: e
        })
    }
})