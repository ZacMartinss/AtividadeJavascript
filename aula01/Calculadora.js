// Importando a biblioteca
const leia = require('readline-sync')

//Variaveis
let celsius, fahrenheit

//Entrada de dados
celsius =  leia.questionFloat("Insira a temperatura em Celsius:")

//Processamento
fahrenheit =  celsius * 1.8 + 32

//Saida de dados
console.log("A temperatura em fahrenheit é:" + fahrenheit)
console.log("A temperatura em fahrenheit é: %f", fahrenheit)