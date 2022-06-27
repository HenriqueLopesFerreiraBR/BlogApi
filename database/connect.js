const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require("multer");

dotenv.config()


const connectDatabase = async ()=> {
    await mongoose.connect(process.env.MONGO_URL,(error) =>{
        if (error) {
            console.log('Não foi possivel se conectar ao bando de dados por causa do erro' , error);
        } else {
            console.log('banco de dados conectado com sucesso');
        }
    });
};

module.exports = connectDatabase