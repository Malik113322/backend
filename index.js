import express from "express";
import router from "./router.js";

const app = express();

app.get("/", (req, res)=>{
    res.json({message: "home page"})
});

app.use("/", router);

const port = 5000;


app.listen(port, ()=>{
    console.log("working")
});