const { response } = require('express')


const usuarioGet = (req, res = response) => {

    // Obtener los parametros que nos llegan por GET usando el req.query
    // Tambien podemos darle un valor por defecto a un parametro que se quiera en caso no se envie 
    const { name = 'No name', userKey, page = 1, limit } = req.query

    res.json({
        ok: true,
        msj: "GET API - Controller",
        name,
        userKey,
        page,
        limit
    });
}


const usuarioPost = (req, res = response) => {

    // Usamos req.body (La persona esta haciendo una solicitud del body)
    // Tambien podemos desestructurar para solo obtener los valores que queremos
    //const body = req.body
    const { name, carrera } = req.body


    // Y aca devlvemos la respuesta del body 
    res.json({
        ok: true,
        msj: "POST API - Controller",
        name,
        carrera
    });
}


const usuarioPut = (req, res = response) => {
    //Obtener el parametro
    const id = req.params.id
    res.json({
        ok: true,
        msj: "PUT API - Controller",
        id
    });
}


const usuarioDelete = (req, res = response) => {
    res.json({
        ok: true,
        msj: "DELETE API - Controller"
    });
}


module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}