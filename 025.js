/*
25 - Crie um script que declare uma função que receba um array de strings como parâmetro e 
retorne um novo array onde cada string esteja em letras maiúsculas. 
Utilize a função toUpperCase() para converter as strings.
*/

const palavras = ["java", "kotlin", "python"]

function palavrasMaiusculas(palavras){

const mudaPalavrasParaMaiusculas = palavras.map(palavras => palavras.toUpperCase())

    return mudaPalavrasParaMaiusculas

}
console.log(palavrasMaiusculas(palavras))