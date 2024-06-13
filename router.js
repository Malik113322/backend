import express from "express";
import { registerController } from "./controller.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post(process.env.REGISTER_LINK, registerController);

router.post(process.env.LOGIN_LINK, registerController);

export  default router;
