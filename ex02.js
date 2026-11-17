const prompt = require('prompt-sync')();

let filaDeAlunos = [];
const qtdeAlunos = 3;

for (let i = 0; i < qtdeAlunos; i++) {
    const nomeAluno = prompt(`Digite o nome do aluno para inserir na fila: `);
    filaDeAlunos.push(nomeAluno);
}

console.log(filaDeAlunos);


while (filaDeAlunos.length > 0) {
    let aluno = filaDeAlunos.shift();
    console.log(`Atendendo o aluno: ${aluno}`);
}