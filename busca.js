const prompt = require("prompt-sync")();

let produtos = [
    { nome: "Couisine&Co", preco: 10.99 },
    { nome: "Snickers", preco: 20.99 },
    { nome: "Kit Kat", preco: 30.99 }
];

const nomeProcura = prompt("Digite o nome do produto que deseja buscar: ");
let achado = null;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nomeProcura) {
        achado = produtos[i];
        break;
    }
}

if (achado !== null) {
    console.log(`Produto encontrado: ${achado.nome}, Preço: R$${achado.preco}`);
} else {
    console.log("Produto não encontrado.");
}