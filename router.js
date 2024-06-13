import express from "express";
import { registerController } from "./controller.js";

const router = express.Router();

router.post("/register", registerController);


router.post("/login", registerController);

export  default router;