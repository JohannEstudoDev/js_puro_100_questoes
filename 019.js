/*
19 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.
*/

const numeros = [1,4,6,0]

    function recebeArray(numeros){

        const menorValor = Math.min(...numeros)

        return menorValor
    }
    console.log(recebeArray(numeros))



