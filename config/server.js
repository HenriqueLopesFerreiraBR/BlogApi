const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose');
const connectDatabase = require('../database/connect')
const authRouter = require("../routes/auth");
const userRouter = require("../routes/users");
const postRouter = require("../routes/posts");

dotenv.config()
app.use(express.json())

connectDatabase()

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

const port = 3000;
app.listen(port, ()=>{
    console.log('App rodando na porta: ' + port)
})