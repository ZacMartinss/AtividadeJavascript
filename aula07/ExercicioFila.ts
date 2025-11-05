import * as readlineSync from 'readline-sync';

class Queue {
  private items: string[] = [];

  enqueue(element: string): void {
    this.items.push(element);
    console.log(`\nCliente Adicionado!\n`);
  }

  dequeue(): void {
    if (this.isEmpty()) {
      console.log(`\nA Fila está vazia!\n`);
      return;
    }
    const removed = this.items.shift();
    console.log(`\nCliente ${removed} foi chamado!\n`);
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  list(): void {
    if (this.isEmpty()) {
      console.log(`\nA Fila está vazia!\n`);
      return;
    }
    console.log(`\nLista de Clientes na Fila:`);
    this.items.forEach(cliente => console.log(cliente));
    console.log();
  }
}

// -------- Programa principal --------
const fila = new Queue();
let opcao: number;

do {
  console.log(`
**************************************
  1 - Adicionar Cliente na Fila
  2 - Listar todos os Clientes
  3 - Retirar Cliente da Fila
  0 - Sair
**************************************
`);
  opcao = readlineSync.questionInt('Entre com a opção desejada: ');

  switch (opcao) {
    case 1:
      const nome = readlineSync.question('Digite o nome do cliente: ');
      fila.enqueue(nome);
      break;
    case 2:
      fila.list();
      break;
    case 3:
      fila.dequeue();
      break;
    case 0:
      console.log('\nPrograma finalizado!\n');
      break;
    default:
      console.log('\nOpção inválida!\n');
  }
} while (opcao !== 0);
