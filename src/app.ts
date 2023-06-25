import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { usersRouter } from "./routers/users-router";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.send('OK!'))
app.use('/auth', usersRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is runnin on port ${PORT}`));