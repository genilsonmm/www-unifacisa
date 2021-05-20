/*
console.log("Olá javascript!")
alert("Olá alert")


let numero1 = 5
let numero2 = 10
let verdadeiro = true

let soma = numero1 + numero2
console.log('A soma é: ' + soma)
console.log('Número 1: ' + numero1)

const mensagem = "Olá javascript"
const aluno = "Maria da Silva"

const boasVindas = mensagem + aluno
const boasVindas = mensagem.concat(aluno)
const boasVindas = `Bem vinda ${aluno} à disciplina de www`
console.log(boasVindas)
*/

let test1 = 1
let test2 = 1

//console.log(test1 == test2)
//console.log("java" == "java")

//console.log(1 === "1")

/*
let vetor = [1, 20, 0, 100]
console.log(vetor)
console.log(vetor[3])

vetor[3] = 200

console.log(vetor[3])

vetor.push(500)
console.log(vetor)
*/

let usuario = {
    id: 10,
    name: 'Maria da Silva',
    contacts: [
        {
            value: '989898908',
            type: 'Phone'
        },
        {
            value: 'maria@gmail.com',
            type: 'Email'
        }
    ]
}

usuario.name = 'Maria da Silva Jesus'
let contact = usuario.contacts.find(c => c.type === 'Phone')

/*
for(let i=0; i < usuario.contacts.length; i++){
    if(usuario.contacts[i].type === 'Phone'){
        contact = usuario.contacts[i]
    }
}
*/
//console.log(contact)

function exemplo1(valor1, valor2){
    return valor1 + valor2
}

let exemplo2 = (valor1, valor2) => {
    return valor1 + valor2
}

console.log(exemplo2(13, 5))