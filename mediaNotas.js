const leia = require ('readline-sync')

//Entrada de dados
console.log('Digite a primeira nota:')
let nota1 = leia.questionFloat()

console.log('Digite a segunda nota:')
let nota2 = leia.questionFloat()

console.log('Digite a terceira nota:')
let nota3 = leia.questionFloat()

console.log('Digite a quarta nota:')
let nota4 = leia.questionFloat()

//Processamento
let media = (nota1 + nota2 + nota3 + nota4) / 4 

//Saida de dados
console.log('\nA media final é: ' + media.toFixed(1))