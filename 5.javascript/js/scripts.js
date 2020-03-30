//Variáveis --------------------------------------------
//Declara uma variável global
/*Importante! 
    Apesar de ainda ser muito utilizado, o var
    não é mais recomendado pelas boas práticas 
    de programação.
*/
var nome = "Paulo Silva";

//Declara uma variável com escopo de bloco
let livro = "Introdução ao javascript";

//Declara uma variável apenas de leitura
const mensagem = "Bem vindo ao site";

/* Calculos --------------------------------------------*/
let valor1 = 10;
let valor2 = 30;
let soma = valor1 + valor2;

let message = "Soma de valor1 + valor2 é: " + soma;
//console.log(message);

/* Strings --------------------------------------------*/
let ola = "Olá ";
let mundo = "mundo";

let olaMundo = ola.concat(mundo);
//console.log(olaMundo);

let msg1 = "Bem";
let msg2 = "vindos";
let templateDeStrings = `${msg1} ${msg2}`;
//console.log(templateDeStrings);

/* boolean --------------------------------------------*/
let teste1 = (1 == 1);
//console.log(teste1 );

let eIgual = ("java" == "java");
//console.log(eIgual);

let teste2  = (1 == 2);
//console.log(teste2);

let test3 = (1 == "1");
//console.log(test3);

let test4 = (1 === "1");
//console.log(test4);

/* array --------------------------------------------*/
let vetor = [1, 22, 0, 100];
console.log(vetor);

console.log(vetor[0]);

vetor[1] = 44;
console.log(vetor[1]);

console.log(vetor);

vetor.push(500);
console.log(vetor);

/* null e undefined -----------------------------------*/
let x;
//console.log(x);

let y = null;
//console.log(y);

/* Objeto ---------------------------------------------*/
let usuario = {
    login: "admin",
    password: "1234"
};

//console.log(usuario);

usuario.login = "maria";

//console.log(usuario);

/* funçoes ---------------------------------------------*/

let func1 = function(){
    console.log("Função 1");
};

function func2 (){
    console.log("Função 2");
};

//func1();
//func2();

function somar (valor1, valor2){
    return valor1 + valor2;
};

//console.log(somar(3, 5));

/* Escopo  ---------------------------------------------*/

var variavelGlobal = "Eu sou global";
let variavelLocal = "sou local";

function testarVariavel1 (){
    console.log("Estou em scripts.js");
    console.log(variavelGlobal);
    console.log(variavelLocal);   

    let variavelDeEscopo = "também sou local, neste escopo";
    console.log(variavelDeEscopo);
};

//testarVariavel1();

/* Loop e if --------------------------------------------*/

let valores = ["Maria", "João", "Daniel"];

for(let i = 0; i < valores.length; i++){
    console.log(valores[i]);

    if(valores[i] === "João"){
        //console.log("Achei João o index: " + i);
    }
}

/* prompt --------------------------------------------

let num1 = prompt("Digite o primeiro número", "");

let num2 = prompt("Digite o segundo número", "");

let sum = parseInt(num1) + parseInt(num2);

alert(`A soma é: ${sum}`);
*/
