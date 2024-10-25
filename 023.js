/*
23 - Crie um script que declare um array de números e utilize a função reduce() para calcular 
a soma de todos os números do array. Imprima o resultado.
*/

const numeros = [2,2,2,2]

const soma = numeros.reduce((incremento, numero) => incremento + numero, 0)

console.log(soma)
