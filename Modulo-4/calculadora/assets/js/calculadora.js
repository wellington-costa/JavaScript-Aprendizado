(function(){

function criaCalculadora(){
    return{

        display: document.querySelector('.display'),



        inicia(){
            alert("Calculadora iniciada!");
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes(){
            document.addEventListener('click', e =>{
                const elemento = e.target;
                if(elemento.classList.contains('btn-num')){
                    
                    this.addBtnDisplay(elemento.innerText);
                }
                if(elemento.classList.contains('btn-clear')){
                    this.displayClear();
                }
                if(elemento.classList.contains('btn-del')){
                    this.displayDel();
                }
                if(elemento.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        pressionaEnter(){
            document.addEventListener('keypress', e => {
                
                console.log(e.keyCode);
                console.log(e.target);
            
                if(e.keyCode === 13){
                    
                    this.realizaConta();
                    
                }
                if(e.keyCode == 8){
                    this.displayDel();
                }
            });
        },

        realizaConta(){
           let conta = this.display.value;
           
            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta Inválida');
                } 
                this.display.value = String(conta);
                
            }
            catch{
                alert("Conta inválida!");
            }
        },

        addBtnDisplay(texto){
            this.display.value += texto;
            this.display.focus();
        },

        displayClear(){
            this.display.value = '';

        },
        displayDel(){
            this.display.value = this.display.value.slice(0,-1);
        }

    }
}


const calculadora = criaCalculadora();
calculadora.inicia();






})();