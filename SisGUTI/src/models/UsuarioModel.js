const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const { async } = require('regenerator-runtime');

const UsuarioSchema = new mongoose.Schema({
     nome:{ type:String, required:true},
     username:{ type:String, required:true},
     password1:{ type:String, required:true},
     selectTipo:{ type:String, required:true},
     email:{ type:String, required:true}
});

const UsuarioModel = new mongoose.model('Usuario',UsuarioSchema);

class Usuario {
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.usuario = null;
    }

   async registra(){
        this.valida();
        
        await this.exists();    
        
        if(this.erros.length > 0) return;
       
            const salt = bcryptjs.genSaltSync();
            this.body.password1 = bcryptjs.hashSync(this.body.password1, salt); // criando hash para senha de usuário
            this.usuario = await UsuarioModel.create(this.body);
            console.log("Inseri na base");
       
        console.log("passei no registra");
        return;
    }
    // verificação para não duplicar usuários na base.
    async exists(){
        try{
            const usuario = await UsuarioModel.findOne({username: this.body.username});
            const email = await UsuarioModel.findOne({email: this.body.email});
            const nome = await UsuarioModel.findOne({nome: this.body.name});
            if(usuario){
                this.erros.push('Nome de Usuário já existe.');
            }
            if(email){
                this.erros.push('Já existe um usuário com esse email.');
            }
            if(nome){
                this.erros.push('Já existe um usuário com esse nome.');
            }
        } catch (e) {
            console.log('err:'+ e.message);
        }
    }

    valida(){
        this.limpa()

        if(!validator.isEmail(this.body.email)){
            this.erros.push('Email inválido.');
        }
        if(this.body.password1.length < 8){
            this.erros.push('Senha deve ter no mínimo 8 caracteres.');
        }
        if(this.body.password1 !== this.body.confirmPassword1){
            this.erros.push('As senhas não conferem.');
        }
    
    }
    limpa(){
      for(let chave in this.body){
        if(typeof this.body[chave] !== 'string'){
            this.body[chave] = '';
        }
       }
       
       this.body =  {
        nome: this.body.nome,
        username: this.body.username,
        password1: this.body.password1,
        email: this.body.email,
        selectTipo: this.body.selectTipo,
        confirmPassword1: this.body.confirmPassword1
        
       }  
    }

    async verifyLogin(){
         console.log('verifyLogin');
        this.usuario = await UsuarioModel.findOne({username: this.body.username});
        if(!this.usuario){
            this.erros.push('Usuário/Senha inválidos!.');
            return;
        } 
        if(!bcryptjs.compareSync(this.body.password1, this.usuario.password1)){
            this.erros.push('Usuário/Senha inválidos!.');
            this.usuario = null;
            return;
        }

    }
}
module.exports = Usuario;