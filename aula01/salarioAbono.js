const leia = require('readline-sync');

//Entrada de dados
console.log("Digite o salario:");
let salario = leia.questionFloat(); 

console.log("Digite o Abono");
let abono = leia.questionFloat();

//Processamento
let novoSalario = salario + abono; 

//Saída de dados
console.log("\nO novo salario é:" + novoSalario.toFixed(2));