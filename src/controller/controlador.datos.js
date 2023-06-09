const  Usuario = require('../model/modelo.datos')
//const Novio = require("../models/novios.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let usuario = new Usuario({       
        nombre: req.body.nombre,
        apellido: req.body.apellido,       
        numId:  req.body.cedula

    })
    usuario.save()

    // usuario.save(function(err){
    //     if(err){
    //         console.error(err), 
    //         response.exito = false,
    //         response.msg = "Error al guardar el empleado"
    //         res.json(response)
    //         return;
    //     }

    //     response.exito = true,
    //     response.msg = "El empleado se guardó correctamente"
    //     res.json(response)
    // })
}

exports.find = function(req,res){
    Usuario.find(function(err, usuarios){
    res.json(usuarios)
    })
}

exports.findOne = function(req,res){
    Usuario.findOne({_id: req.params.id},function(err, usuario){
        res.json(usuario)
    })
}

exports.update = function(req,res){
    let usuario = {
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipoId: req.body.tipoId,
        numId:  req.body.numId
    }

    Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado modifico correctamente"
        res.json(response)
    })
}


exports.remove = function(req,res){
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado eliminado correctamente"
        res.json(response)
    })
}