const mongoose = require('mongoose');


const connectDatabase = async ()=> {
    await mongoose.connect(`mongodb+srv://henrique:342124@xblog.dt2b7.mongodb.net/xblog?retryWrites=true&w=majority`,(error) =>{
        if (error) {
            console.log('Não foi possivel se conectar ao bando de dados por causa do erro' , error);
        } else {
            console.log('banco de dados conectado com sucesso');
        }
    });
};

module.exports = connectDatabase