const readlineSync = require('readline-sync');

// Cria um array vazio para armazenar as cores
let cores: string[] = [];

// Pede ao usuário para digitar 5 cores
for (let i = 0; i < 5; i++) {
    let cor = readlineSync.question(`Digite a ${i + 1}ª cor: `);
    cores.push(cor);
}

// Exibe todas as cores adicionadas
console.log("\nListar todas as cores:");
for (let cor of cores) {
    console.log(cor);
}

// Ordena e exibe as cores em ordem crescente (alfabética)
console.log("\nOrdenar as cores:");
let coresOrdenadas = [...cores].sort();
for (let cor of coresOrdenadas) {
    console.log(cor);
}
