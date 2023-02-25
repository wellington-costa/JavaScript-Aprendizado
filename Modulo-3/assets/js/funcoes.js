/*
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



// Array função Splice

const nomes =  ['Maria','João','André','Júlia'];
 //removendo do final com splice
 const removidospop = nomes.splice(0, -1); // simulando nomes.pop()
 const removidosshift = nomes.splice(0, 1,); // simulando nomes.shift()
 nomes.splice(nomes.length, 0, 'wellington', 'Mariane'); // simulando nomes.push()
 nomes.splice(0, 0, 'Mauro','Otávio'); // simulando nomes.unshift()
 
 
 console.log(nomes, removidos);

 // Concatenando arrays

 const nomess =  ['Maria','João','André','Júlia'];
 const nomes2 =  ['Maria Júlia','João Antonio','André Luiz','Júlia Maria'];
 const a3 = nomess.concat(nomes2,'Cassandra');

 // Filtrar valores de um array
 // buscar por nomes com mais de 5 letras
                                //arrow function
 let nomesFiltrados = a3.filter(valor => valor.length < 5);
 //console.log(nomesFiltrados);

 //Filtrar nomes que terminam com A
 let nomesComA = a3.filter(valor => valor.toLowerCase().endsWith('a'));

//console.log(nomesComA);

//Utilizando map para alterar valores de array ou objetos
// dobrando valores de array
arrayNum = [1,2,3,4,5,10,20,30,40];
arrayEmDobro = arrayNum.map(valor => valor*2);
//console.log(arrayEmDobro);

const pessoas =[
    {nome:'Wellington', idade:28, altura:1.86},
    {nome:'Mariane', idade:22, altura:1.70},
    {nome:'Carla', idade:27, altura:1.66},
    {nome:'Suzana', idade:29, altura:1.76},
    {nome:'Maria', idade:25, altura:1.60}
];
// Criando novo array de pessoas com chave id
const comId = pessoas.map((obj, index)=>{
    const newObj = {...obj};
    newObj.id = index;
    return newObj;
});
//console.log(pessoas);
//console.log("#####################");
//console.log(comId);

// Alterando array pessoas
const maturidade = pessoas.map(obj => {
    if(obj.idade > 25){
        obj.maturidade = "Alta";
        return obj;
    }else{return obj.maturidade = "Baixa"}
});

//console.log(pessoas);
//console.log(maturidade);

// Reduce - reduz array
// Retorne a pessoa mais velha

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
//console.log(maisVelha);

//Unindo filter, map e reduce
// Retorne a soma do dobro de todos os pares
const total = arrayNum.filter(valor=>valor % 2===0).map(valor => valor*2).reduce((ac,valor) => ac+=valor);
//console.log(total);


// Validador de cpf

let cpf = '705.484.450-52';
cpf = cpf.replace(/\D+/g, ''); // (/\D+/g) tira tudo que não é numero
cpfArray = Array.from(cpf);

somaCpf = cpfArray.reduce((ac, valor)=>{
   
},10)


function ValidaCPF(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequence()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCPF = cpfParcial + digito1 + digito2;
    return novoCPF === this.cpfLimpo;


};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let contador = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val)=> {
        ac += contador * Number(val);
        contador--;
        return ac;
    }, 0);
    const digito = 11 -(total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequence = function(){
    const seq = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return seq===this.cpfLimpo;
};

const consultaCpf = new ValidaCPF('111.111.111-11');
console.log(consultaCpf.valida());

*/



