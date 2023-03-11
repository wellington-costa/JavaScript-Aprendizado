const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
     nome:{ type:String, required:true},
     username:{ type:String, required:true},
     senha:{ type:String, required:true}
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
        if(this.erros.length > 0) return;
        try{
            await UsuarioModel.create(this.body);
            console.log("Created");
        } catch (e) { 
           console.log(e);
        }
        return;
    }

    valida(){
        this.limpa()
        if(this.body.senha.length < 8){
            this.erros.push('Senha deve ter no mínimo 8 caracteres');
        }
        if(this.body.senha !== this.body.confirmaSenha){
            this.erros.push('As senhas não conferem');
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
        senha: this.body.senha,
        confirmaSenha: this.body.confirmaSenha
        
       }  
    }
}
module.exports = Usuario;