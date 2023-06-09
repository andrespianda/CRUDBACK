const app = require('./app')
require('./database')
//require('./dataBase') // ESTA FUNCIONANDO...


//app.listen(4000, ()=>console.log("conectado en el puerto 4000"))

async function main(){

   await app.listen(app.get('port'))

   console.log("conectado al puerto", app.get('port'))

}

main();