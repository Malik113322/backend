import express from "express";
import { registerController } from "./controller.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post(process.env.register, registerController);

router.post(process.env.login, registerController);

export  default router;