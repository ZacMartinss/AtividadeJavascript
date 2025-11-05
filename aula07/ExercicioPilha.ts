import * as readlineSync from 'readline-sync';

class Stack {
  private items: string[] = [];

  // Adiciona um novo livro na pilha
  push(element: string): void {
    this.items.push(element);
    console.log(`\nLivro adicionado!\n`);
  }

  // Retira o livro do topo da pilha
  pop(): void {
    if (this.isEmpty()) {
      console.log(`\nA Pilha está vazia!\n`);
      return;
    }
    const removed = this.items.pop();
    console.log(`\nUm livro foi retirado da pilha (${removed})!\n`);
  }

  // Verifica se a pilha está vazia
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Lista todos os livros na pilha (do topo para a base)
  list(): void {
    if (this.isEmpty()) {
      console.log(`\nA Pilha está vazia!\n`);
      return;
    }

    console.log(`\nLista de Livros na Pilha:`);
    // Mostra o último adicionado primeiro (ordem LIFO)
    [...this.items].reverse().forEach(livro => console.log(livro));
    console.log();
  }
}

// -------- Programa principal --------
const pilha = new Stack();
let opcao: number;

do {
  console.log(`
**************************************
  1 - Adicionar Livro na Pilha
  2 - Listar todos os Livros
  3 - Retirar Livro da Pilha
  0 - Sair
**************************************
`);

  opcao = readlineSync.questionInt('Entre com a opção desejada: ');

  switch (opcao) {
    case 1:
      const nome = readlineSync.question('Digite o nome do livro: ');
      pilha.push(nome);
      break;

    case 2:
      pilha.list();
      break;

    case 3:
      pilha.pop();
      break;

    case 0:
      console.log('\nPrograma finalizado!\n');
      break;

    default:
      console.log('\nOpção inválida!\n');
  }
} while (opcao !== 0);
