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
  const a = Number(await perguntar("Digite o número A: "));
  const b = Number(await perguntar("Digite o número B: "));
  const c = Number(await perguntar("Digite o número C: "));
  rl.close();

  const soma = a + b;

  if (soma > c) {
    console.log(`${a} + ${b} = ${soma} > ${c}`);
    console.log("A Soma de A + B é Maior do que C");
  } else if (soma < c) {
    console.log(`${a} + ${b} = ${soma} < ${c}`);
    console.log("A Soma de A + B é Menor do que C");
  } else {
    console.log(`${a} + ${b} = ${soma} = ${c}`);
    console.log("A Soma de A + B é Igual a C");
  }
})();