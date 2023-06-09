const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuariosSchema =  new Schema({
    //usuario:{type: String , required: true , max: 100 },
    nombre:{type: String , required: true , max: 100 },
    apellido:{type: String , required: true , max: 100 },
    //tipoId:{type: String , required: true , max: 2 },
    numId: {type: String, required: true , max: 14 },

})

module.exports = mongoose.model("usuarios", UsuariosSchema)