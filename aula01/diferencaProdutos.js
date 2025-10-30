const leia = require ('readline-sync')

console.log('Digite o numero1:')
let n1 = leia.questionFloat();

console.log('Digite o numero2:')
let n2 = leia.questionFloat();

console.log('Digite o numero3:')
let n3 = leia.questionFloat();

console.log('Digite o numero4:')
let n4 = leia.questionFloat();

//Processamento
let diferenca = (n1 * n2) - (n3 * n4);

//Saida de daddos
console.log('\nDifereça:' + diferenca.toFixed(1))