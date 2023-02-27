import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

( function() {
    const gera = new GeraCPF();
    const showCPF = document.querySelector('.cpf-gerado');
    const btnGerar = document.querySelector('.btn-gerar');
    btnGerar.addEventListener('click', e=>{
        showCPF.innerHTML = gera.geraNovoCpf();
    })
    

})();