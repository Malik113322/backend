import express from "express";
import router from "./router.js";
import connectDatabase from "./connectDB.js";
import morgan from "morgan";


const app = express();

connectDatabase();

app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res)=>{
    res.json({message: "home page"})
});

app.use("/", router);

const port = 5000;


app.listen(port, ()=>{
    console.log("working")
});