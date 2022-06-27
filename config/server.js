const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose');
const connectDatabase = require('../database/connect')
const authRouter = require("../routes/auth");
const userRouter = require("../routes/users");
const postRouter = require("../routes/posts");
const categoryRouter = require("../routes/categories");
const multer = require("multer")

dotenv.config()
app.use(express.json())

connectDatabase()


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../images")
    }, filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
})

const upload = multer({storage:storage});
app.post("/ape/upload", upload.single("arquivo"), (req,res)=>{
    res.status(200).json("Arquivo foi updado")    
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);
app.use(multer)

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log('App rodando na porta: ' + port)
})