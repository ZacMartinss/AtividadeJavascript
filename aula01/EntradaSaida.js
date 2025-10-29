const leia = require('readline-sync');


// Declarando variaveis
let nome, distancia 

// Entrada de dados
console.log ("Digite seu nome:")
nome = leia .question()

console.log("\nDigite a distancia percorrida em sua corrida")
distancia = leia. questionFloat()

//Saída dos Dados
console.log("\nBomdia,"+ nome)
console.log("\nA distancia percorrida foi de: " + distancia)