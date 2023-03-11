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