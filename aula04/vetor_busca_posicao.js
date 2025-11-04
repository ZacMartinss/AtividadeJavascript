const prompt = require('prompt-sync')();

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const alvo = parseInt(prompt("Digite o número que você deseja encontrar: "));

let posicao = -1; 

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === alvo) {
        posicao = i;
        break; 
    }
}

if (posicao !== -1) {
    console.log(`O número ${alvo} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${alvo} não foi encontrado!`);
}