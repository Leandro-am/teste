let pilhaDevolvidos = [];
let estante = [];

pilhaDevolvidos.push("O Auto da Compadecida");
pilhaDevolvidos.push("Hilda Furacão");
pilhaDevolvidos.push("Constantine");
pilhaDevolvidos.push("Harry Potter");

console.log(`Livro no topo da pilha: ${pilhaDevolvidos[pilhaDevolvidos.length - 1]}`);

while (pilhaDevolvidos.length > 0) {
    let livro = pilhaDevolvidos.pop();
    console.log(`guardando na estante o livro: ${livro}`);
    estante.push(livro);
}
console.log("balcão de devolução vazio");
