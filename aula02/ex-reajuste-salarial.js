const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => rl.question(pergunta, resposta => resolve(resposta)));
}

(async () => {
  const nome = await perguntar("Nome do colaborador: ");
  const codigo = Number(await perguntar("Cargo (1 a 6): "));
  const salario = Number(await perguntar("Salário: R$ "));
  rl.close();

  let cargo = "";
  let reajuste = 0;

  switch (codigo) {
    case 1:
      cargo = "Gerente";
      reajuste = 0.10;
      break;
    case 2:
      cargo = "Vendedor";
      reajuste = 0.07;
      break;
    case 3:
      cargo = "Supervisor";
      reajuste = 0.09;
      break;
    case 4:
      cargo = "Motorista";
      reajuste = 0.06;
      break;
    case 5:
      cargo = "Estoquista";
      reajuste = 0.05;
      break;
    case 6:
      cargo = "Técnico de TI";
      reajuste = 0.08;
      break;
    default:
      console.log("Código de cargo inválido!");
      return;
  }

  const novoSalario = salario + (reajuste * salario);

  console.log(`\nNome do colaborador: ${nome}`);
  console.log(`Cargo: ${cargo}`);
  console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
})();