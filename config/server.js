const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose');
const connectDatabase = require('../database/connect')
const authRouter = require("../routes/auth");

dotenv.config()
app.use(express.json())

connectDatabase()

app.use("/api/auth", authRouter);

const port = 3000;
app.listen(port, ()=>{
    console.log('App rodando na porta: ' + port)
})