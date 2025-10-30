const leia =  require ('readline-sync')

//Entrada de dados

console.log('Digite o salario bruto:')
let salarioBruto = leia.questionFloat()

console.log('Digite o adicional noturno:')
let adicionalNoturno = leia.questionFloat()

console.log('Digite as horas extras:')
let horasExtras = leia.questionFloat()

console.log('Digite os descontos:')
let descontos = leia.questionFloat()

//Processamento
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras* 5) - descontos;

//Saída de dados
console.log('\nO salario liquido é:' + salarioLiquido.toFixed(2))