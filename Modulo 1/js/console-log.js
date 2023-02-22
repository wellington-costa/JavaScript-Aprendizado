
// Try catch throw




/*
// Escreva 2 numeros inteiros e retorne o maior deles
let num1 =prompt('digite o primeiro num');
let num2 =prompt('digite o segundo num');
alert(Math.max(num1,num2));



/*
// Mudando cor de fundo e da letra de paragrafos
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
let bgBody = estilosBody.backgroundColor;

for (p of ps){
  p.style.backgroundColor = bgBody;
  p.style.color = '#FFFF';
}







/*

// Objeto Date

const  data = new Date();
console.log(formataData(data));

function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;
}
function formataData(data){
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth()+1);
  const ano = zeroAEsquerda(data.getFullYear());
  const horas = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}









/* Operações ternárias

ex: 
    const pontuacao=1000;
    if(pontuacao >= 1000){
       console.log('Usuário Vip');
    }
    else{
       console.log('Usuário normal');
    }

    //passa a ser

    const nivel = pontuacao >= 1000 ? 'Usuario Vip' : 'Usuário normal';
    ########################
    const cor = null;
    const corPadrao = cor || 'Preta';
     //saída de corPadrao vai ser preta. 






/*
function saudacao(){
    console.log('Bom dia');
}

const a = function(n){return n**2};// Funçao anonima 
const b = n=> n**2; // Arrow function 

/*
// FUNÇOES ARRAY
const alunos = ['Maria','Laura']
alunos.push('Carlos') // Adiciona no final
alunos.unshift('Mariane')// Adiciona no começo
alunos.shift()//exclui do começo
delete alunos[1]
alunos.pop() // Remove do final
alunos.slice(0,-1) // fatia a lista



let num = Number(prompt("Digite um numero:"));
const numTitulo = document.getElementById("numero");
const texto = document.getElementById("texto");

numTitulo.innerHTML = num;
texto.innerHTML=';'
texto.innerHTML += `<p> Raiz quadrada: ${num ** 0.5} </p>`;
texto.innerHTML += `<p> Inteiro: ${Number.isInteger(num)} </p>`;
texto.innerHTML += `<p> NaN: ${Number.isNaN(num)} </p>`;
texto.innerHTML += `<p> Arredonda para baixo: ${Math.floor(num)} </p>`;
texto.innerHTML += `<p> Duas casas decimais: ${num.toFixed(2)} </p>`;
texto.innerHTML += `<p> Arredonda para cima: ${Math.ceil(num)} </p>`;
texto.innerHTML += `<p> Arredonda : ${Math.round(num)} </p>`;



/*
let nome = "Wellington";
let flo = 15.5;
let bool = true;
let list = [1,"2",3];
let dict = {'1':2};
console.log("Meu nome e ",nome,". Estou aprendendo JavaScript");
console.log(typeof(nome));
console.log(typeof(flo));
console.log(typeof(bool));
console.log(typeof(list));
console.log(typeof dict, dict);
console.log("");
 Operadores aritmeticos
   ** Potenciaçao
   % resto de divisao
   ++ incrementador
   a += 2 incrementa
   a *= 2 multiplica
   objeto Math para operaçoes com numeros
    */

