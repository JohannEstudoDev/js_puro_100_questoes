/*
20 - Crie um script que declare uma função que receba um array de números 
como parâmetro e retorne a média dos números do array.
*/

const numeros = [7,7,7,7]

function calculaMediaArray(numeros){
    let soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
    }
    const media  = soma / numeros.length
    return media
}

console.log(calculaMediaArray(numeros))


