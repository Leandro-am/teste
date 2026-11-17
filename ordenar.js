const prompt = require("prompt-sync")();

let produtos = [
    { nome: "Couisine&Co", preco: 10.99 },
    { nome: "Snickers", preco: 20.99 },
    { nome: "Kit Kat", preco: 30.99 }
];

produtos.sort((a, b) => a.preco - b.preco);

for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto: ${produtos[i].nome}, Preço: R$${produtos[i].preco}`);
}