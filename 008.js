const notas = [6.0, 7.0, 7.0]

console.log("A Primeira nota do alunoé: ",notas[0])
console.log("A Segunda nota do aluno é: ",notas[1])
console.log("A Terceira nota do aluno é: ",notas[2])

const media = (notas[0]+notas[1]+notas[2]) / 3
console.log(`A média do aluno é:  ${media.toFixed(2)}`)

if (media >= 7.0){
    console.log("APROVADO")
}else{
    console.log("REPROVADO")
}

