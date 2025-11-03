const numeros: number[] = [10, 25, 8, 12, 5];
let soma = 0;

for (const n of numeros) {
  soma += n;
}

console.log("Números:", numeros);
console.log("Soma total:", soma);