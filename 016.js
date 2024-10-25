/*
16 - Crie um script que declare um array de números e utilize um loop while para calcular 
a soma de todos os números do array. Imprima o resultado.
*/

const arrayNumeros = [2,2,2,2]

    let soma = 0
    let i = 0

    while (i < arrayNumeros.length){
        soma = soma + arrayNumeros[i]
        //soma += arrayNumeros[i]
        i++
    }
    console.log(soma)

