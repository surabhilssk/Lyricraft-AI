import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { mainRouter } from "./routes/index";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

//main routing
app.use("/api/v1", mainRouter);



app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
})