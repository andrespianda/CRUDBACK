// const mongoose = require('mongoose')

// const URI = 'mongodb://localhost/datosusuarios'

// mongoose.connect(URI,{
//     use
//     useCreateIndex:true
// })

// const connection = mongoose.connection

// connection.once('open', ()=>{
// console.log('Conexion Base de datos correcta!!')
// })

const mongoose = require("mongoose")


exports.mongoConnect = () => {
    // const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    const mongoStringConnection = 'mongodb://localhost/datosusuarios';
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;

    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}