const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose');

dotenv.config()
mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlPerser:true,
        useUnifiedTopology:true,
        useCreateIndex: true,
    })
    .then(console.log("Banco de dados conectado com sucesso"))
    .catch(err => console.log(err));


const port = 3000;
app.listen(port, ()=>{
    console.log('App rodando na porta: ' + port)
})