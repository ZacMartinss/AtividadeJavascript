const frutas: Set<string> = new Set<string>([
  "Maçã",
  "Banana",
  "Abacaxi",
  "Manga",
  "Pera"
]);

console.log("Frutas cadastradas inicialmente:");
console.log(frutas);

// Adiciona novas frutas
frutas.add("Kiwi");
frutas.add("Uva");

console.log("\nApós adicionar novas frutas:");
console.log(frutas);

// Remove uma fruta específica
frutas.delete("Banana");

console.log("\nApós remover 'Banana':");
console.log(frutas);

// Mostra o tamanho final do Set
console.log("\nTotal de frutas:", frutas.size);