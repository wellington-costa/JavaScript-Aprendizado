import geraSenha from "./geradores";

export default () => {

const senhaGerada = document.querySelector('.senha-gerada');
const chkMaiusc = document.querySelector('.chk-maiuscula');
const chkminuscula = document.querySelector('.chk-minuscula');
const chknumero = document.querySelector('.chk-numeros');
const chksimbolo = document.querySelector('.chk-simbolos');
const btnGerar = document.querySelector('.btn-gerar');
const qtd = document.querySelector('.qtd');

btnGerar.addEventListener('click', () =>{
     
     senhaGerada.innerText = gera();

});

function gera(){
    const senha = geraSenha(qtd.value,chkMaiusc.checked, chkminuscula.checked, chknumero.checked, chksimbolo.checked);
    return senha || 'Selecione algum campo!';
}
};