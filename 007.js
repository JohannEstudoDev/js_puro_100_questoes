const aluno = {
    nome: "Johann",
    cpf: "000.000.000-00",
    cidade: "Cabedelo",
    notas:[7.0, 7.0, 7.1, 6.9]
}
console.log("Nome: ",aluno.nome)
console.log("CPF: ",aluno.cpf)
console.log ("Cidade: ",aluno.cidade)
console.log ("Nota 1: ",aluno.notas[0])
console.log ("Nota 2: ",aluno.notas[1])
console.log ("Nota 3: ",aluno.notas[2])
console.log ("Nota 4: ",aluno.notas[3])

const media =  (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / 4
console.log("Média: ", media)

const sorteioNota = Math.floor(Math.random() * aluno.notas.length);
const notaAleatoria = aluno.notas[sorteioNota];
const notaConvertida = notaAleatoria * 10;
console.log(`Nota aleatória convertida: ${notaConvertida}`);

