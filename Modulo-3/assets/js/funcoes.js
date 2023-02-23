// Funções
//Declaração de função clássica (Function hoisting)
//EX:
    falaOi();
    function falaOi(){
        console.log('oie');
    }

//Função é objeto de primeira classe
//function expression
const dado = function(){
    console.log('dsds');
};
function execfunction(funcao){
    console.log('Executa função dado()')
    funcao();
}
execfunction(dado);
//Arrow functions
const funcaoarrow = () => {
    console.log("sou uma arrow function");
};
funcaoarrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log("Sou uma função dentro de um objetoS");
    }
};

obj.falar();

// não é obrigatório a passagem de argumentos às funçoes
//ex:
function funcaoSoma(){
    let total = 0;
    for(let argumento of arguments){
        total+=argumento;
    }
    console.log(total);
}
funcaoSoma(1,10,19,20,30,300,1000); // resultado = 1380

/////////////
function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(15)); // r=30
console.log(triplica(15)); // r=45
console.log(quadriplica(15));//r=60