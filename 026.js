/*
26 - Crie um script que declare uma função que receba um array de strings como parâmetro e 
retorne um novo array onde cada string esteja em letras minúsculas. 
Utilize a função toLowerCase() para converter as strings.
*/

const palavras = ["Java", "KOTLIN", "PYthoN"]

function convertePalavrasMinusculas(palavras){

    const palavrasMinusculas = []

    for (let i = 0; i < palavras.length; i++){
        palavrasMinusculas.push(palavras[i].toLowerCase())
    }
    return palavrasMinusculas

}
console.log(convertePalavrasMinusculas(palavras))