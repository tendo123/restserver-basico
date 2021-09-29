//Requerimos express
const express = require('express')
const cors = require('cors')
    //Creamos una clase donde tendran sus propiedades y metodos
class Server {

    //Creamos un constructor 
    constructor() {
        //Creamos las propieades
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios'

        //Middlewares
        this.middlewares();

        //Rutas
        this.rutas();
    }



    middlewares() {
        // CORS
        this.app.use(cors());

        // JSON 
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'))
    }

    rutas() {
        this.app.use(this.usuarioPath, require('../routes/user'))
    }

    listen() {
        //Metodo listen de express para llamar al puerto le enviamos el puerto y adicional una funcion que muestre un msj con el puerto
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto ", this.port)
        })
    }


}


module.exports = Server