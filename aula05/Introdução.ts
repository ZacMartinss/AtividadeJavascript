console.log("Hello World!");

import readlinesync = require("readline-sync");

let quantidade: number;
let altura: number;
let tipo: string;
let resposta: boolean;
let palavra: string;

const turma: string = "Turma JavaScript"

quantidade = readlinesync.questionInt("\nDigite um valor do tipo Inteiro: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor inteiro digitado foi: " + quantidade);

altura = readlinesync.questionFloat("\nDigite um valor do tipo decimal: ", {limitMessage: 'Digite um numero decimal'});
console.log("O valor decimal digitado foi: " + altura);

tipo = readlinesync.keyIn("\nDigite um valor do tipo Char - um único caractere: ");
console.log("\nO valor char digitado foi: " + tipo);

resposta = readlinesync.keyInYNStrict("\nDigite um valor do tipo Boolean: ");
console.log("O valor boolean digitado foi: " + resposta);

palavra = readlinesync.question("\nDigite um valor do tipo string: ");
console.log("O valor string digitado foi: " + palavra);