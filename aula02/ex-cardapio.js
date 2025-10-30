const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => rl.question(pergunta, resposta => resolve(resposta)));
}

(async () => {
  const codigo = Number(await perguntar("Código do Produto: "));
  const quantidade = Number(await perguntar("Quantidade: "));
  rl.close();

  let produto = "";
  let preco = 0;

  switch (codigo) {
    case 1:
      produto = "Cachorro Quente";
      preco = 10.00;
      break;
    case 2:
      produto = "X-Salada";
      preco = 15.00;
      break;
    case 3:
      produto = "X-Bacon";
      preco = 18.00;
      break;
    case 4:
      produto = "Bauru";
      preco = 12.00;
      break;
    case 5:
      produto = "Refrigerante";
      preco = 8.00;
      break;
    case 6:
      produto = "Suco de laranja";
      preco = 13.00;
      break;
    default:
      console.log("Código inválido!");
      return;
  }

  const total = preco * quantidade;

  console.log(`Produto: ${produto}`);
  console.log(`Valor total: R$ ${total.toFixed(2)}`);
})();