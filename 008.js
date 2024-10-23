/*8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno.
O programa deve imprimir:
A primeira nota do aluno é: …
A segunda nota do aluno é: …
A terceira nota do aluno é: …
A média do aluno é: …
O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).
*/

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

