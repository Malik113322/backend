import express from "express";

const router = express.Router();

router.get("/register", (req, res)=>{
    res.json({message: "register page"})
});


router.get("/login", (req, res)=>{
    res.json({message: "login page"})
});

export  default router;