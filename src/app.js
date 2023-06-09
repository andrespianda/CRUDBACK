const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const datosrouter = require('./routes/ruta.datos')

const rest = require('./database')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//setings

app.set('port', 4000) //puerto se puede modificar o agregar funcion para modificarlo desde front
rest.mongoConnect()


//midlewears

app.use(cors());


//rutas
app.use('/datos', datosrouter)
// app.use('/cargas', require('./routes/routeCarga'))   
// app.use('/cargaxlsx', require('./routes/routeCargaXlsx'))



module.exports = app;