const readline = require("readline");

// Cria interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => rl.question(pergunta, resposta => resolve(resposta)));
}

(async () => {
  const numero = Number(await perguntar("Digite um número: "));
  rl.close();

  if (Number.isNaN(numero)) {
    console.log("Entrada inválida. Digite um número inteiro.");
    process.exit(1);
  }

  // Verifica paridade
  const tipo = numero % 2 === 0 ? "par" : "ímpar";

  // Verifica sinal
  const sinal = numero >= 0 ? "positivo" : "negativo";

  console.log(`O Número ${numero} é ${tipo} e ${sinal}!`);
})();