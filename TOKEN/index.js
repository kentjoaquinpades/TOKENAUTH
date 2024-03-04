import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { db } from "./config/Database.js"; // Changed import statement
import router from "./routes/index.js";

dotenv.config();
const app = express();

app.use(cors({ credentials:true, origin:'http://localhost:5002' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5002, ()=> console.log('Server running at port 5000'));