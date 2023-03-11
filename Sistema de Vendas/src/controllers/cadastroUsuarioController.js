const { async } = require('regenerator-runtime');
const Usuario = require('../models/UsuarioModel');

exports.index = (req, res)=>{
    res.render('cadUsuario');
};

exports.registra = async (req, res)=>{
    const usuario = new Usuario(req.body);
    await usuario.registra();
    if(usuario.erros.length > 0){
        req.flash('erros', usuario.erros);
        req.session.save(function(){
           return res.redirect('cadUsuario');
        })
    }
    return;
};