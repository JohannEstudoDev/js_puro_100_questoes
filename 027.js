/*
27 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne 
um novo array onde cada número seja elevado ao quadrado.
*/

const numeros = [2,3,6,9]

function numerosAoQuadrado(numeros){

    const resultadoAoQuadrado = numeros.map(numeros  => numeros * numeros)

    return resultadoAoQuadrado

}
console.log(numerosAoQuadrado(numeros))

