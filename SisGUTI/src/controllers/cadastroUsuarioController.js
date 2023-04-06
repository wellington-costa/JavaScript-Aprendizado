const { response } = require('express');
const { async } = require('regenerator-runtime');
const Usuario = require('../models/UsuarioModel');

exports.index = (req, res)=>{
    res.render('cadUsuario');
};

exports.registra = async (req, res)=>{
    
  try{
    const usuario = new Usuario(req.body);
    await usuario.registra();
    if(usuario.erros.length > 0){
        req.flash('erros', usuario.erros);
        req.session.save(function(){
            console.log(usuario.erros);
           return res.redirect('cadastroUsuario');
        });
        return;
    }
    req.flash('success', 'Usuário cadastrado com sucesso!');
    req.session.save(function(){
         
         return res.redirect('cadastroUsuario');
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    }

};

exports.editar = async (req, res) => {
  try {
    if(!req.params.id) return res.render('404');
    const usuario = new Usuario(req.body);
    await usuario.update(req.params.id);   
    if(usuario.erros.length > 0){
        req.flash('erros', usuario.erros);
        req.session.save(function(){
            console.log(usuario.erros);
           return res.redirect('cadastroUsuario/editar');
        });
        return;
    }
    req.flash('success', 'Usuário atualizado com sucesso!');
    req.session.save(function(){
         
         return res.redirect('cadastroUsuario/editar');
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    }
    
};

exports.editView = async (req, res) => {
    try {
        if(!req.params.id) return res.render('404');
        const usuario = new Usuario(req.body);
        const usuarioDaBase = await usuario.getForId(req.params.id); 
        if(!usuarioDaBase) return res.render('404');
        res.render('usuarioUpdate', {usuario: usuarioDaBase});  
        
        }catch(e){
            console.log(e);
            return res.render('404');
        }
};