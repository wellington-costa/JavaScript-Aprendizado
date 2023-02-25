class ValidaForm {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
            
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const campValido = this.checaCampos();
        const senhaValida = this.checaSenha();

        if(campValido && senhaValida){
            this.formulario.submit();
            alert("Usuário Cadastrado!");
        }
        

    }

    checaSenha(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const rptSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== rptSenha.value){
            this.criaError(senha, "Campos Senha e repetir senha devem ser iguais");
            this.criaError(rptSenha, "Campos Senha e repetir senha devem ser iguais");
            valid = false;
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            this.criaError(senha, 'Senha dever conter entre 6 e 12 digitos.');
            valid = false
        }
        return valid;

    }

    checaCampos(){
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.valida')){
            const label = campo.previousElementSibling.innerText;
           
            if(!campo.value){
                this.criaError(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf') && campo.value){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario') && campo.value){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;

    }

    validaUsuario(campo){
        let valido = true;
        if(campo.value.length < 3 || campo.value.length > 12){
            this.criaError(campo, 'nome de usuário dever conter entre 3 e 12 digitos.');
            valido = false
        }
        if(!campo.value.match(/^[a-zA-Z0-9]+$/g)){
            this.criaError(campo, "nome de usuário deve conter apenas letras e/ou números.");
            valido = false
        }

        return valido;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()){
            this.criaError(campo, 'CPF inválido.');
            return false;
        }

        return true;

    }

    criaError(campo,msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaForm();