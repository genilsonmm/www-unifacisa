/*
let numero1 = 5
let numero2 = 10
let soma = numero1 + numero2

console.log('A soma de número 1 + número 2 é: ' + soma)


let nome = 'Maria da Silva'
let idade = 35

console.log(`Aluna: ${nome} Idade: ${idade}`)
*/

let teste1 = (1 == 1)
//console.log(teste1)

let eIgual = ("java" == "java")
//console.log(eIgual)

let teste3 = (1 == 2)
//console.log(teste3)

let teste = (1 === "1")
//console.log(teste)

let vetor = [1, 22, 0, 100]
console.log(vetor)
//console.log(vetor[1])

vetor[1] = 40
//console.log(vetor)

vetor.push(500)
//console.log(vetor)

vetor.pop()
//console.log(vetor)

let item = vetor.find(i => i === 44)
//console.log(item)

let x
let y = null

//console.log(x)
//console.log(y)

let usuario = {
    login: 'admin',
    password: '1234',
    id: 2
}

//console.log(usuario)
//console.log(usuario.login)

usuario.login = 'maria'

//console.log(usuario.login)

function func1 () {
    console.log("Sou uma função - Func1")
}

let func2 = function () {
    console.log("Sou uma função - Func2")
}

let func3 = () => {
    console.log("Sou uma função - Func3")
}

function somar (valor1, valor2){
    return valor1 + valor2
}

let somar2 = (valor1, valor2) => valor1 + valor2


//func1()
//func2()
func3()
//console.log(somar(5, 2))

let valores = ['Maria', 'João', 'Daniel']
for(let i = 0; i < valores.length; i++){
    //console.log(valores[i])
}

let nome = prompt("Digite o seu nome", "")
console.log(nome)


