/*
21 - Crie um script que declare um array de números e utilize a função filter() para criar um novo 
array contendo apenas os números pares. Imprima o novo array.
*/

const numeros = [1,2,3,4,5]

const testeNumeroPar = numeros => numeros % 2 === 0
const resultadoNumerosPares = numeros.filter(testeNumeroPar)

console.log(resultadoNumerosPares)
