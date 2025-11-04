import * as readlineSync from 'readline-sync';

// Cria um Set vazio para armazenar números sem repetição
let numeros: Set<number> = new Set();

// Pede para o usuário digitar 10 números
for (let i = 0; i < 10; i++) {
    let numero = Number(readlineSync.question(`Digite o ${i + 1}º numero: `));
    numeros.add(numero);
}

// Exibe todos os números do Set
console.log("\nListar dados do Set:");
for (let num of numeros) {
    console.log(num);
}
