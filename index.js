import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.json({message: "working"})
});

const port = 5000;


app.listen(port, ()=>{
    console.log("working")
});