const { async } = require('regenerator-runtime');
const Usuario = require('../models/UsuarioModel');

exports.index = (req, res)=>{
    
    res.render('login');
};
exports.login = async (req, res)=>{
    
    try{
        const usuario = new Usuario(req.body);
        await usuario.verifyLogin();
        if(usuario.erros.length > 0){
            req.flash('erros', usuario.erros);
            req.session.save(function(){
                console.log(usuario.erros);
               return res.redirect('back');
            });
            return;
        }
        
        req.session.save(function(){
             req.session.user = usuario.usuario;
             return res.redirect('/');
            });
        }catch(e){
            console.log(e);
            return res.render('404');
        }
    
    };
    exports.logout = (req, res)=>{
        req.session.destroy();
        res.redirect('login');
    };
exports