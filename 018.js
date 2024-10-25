/* 
18 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne o maior número do array. Utilize a função Math.max() para encontrar o maior número.
*/

const numeros = [8,2,5,2]

function recebeNumeros(numeros){
    
   const maiorNumero = Math.max(...numeros)

    return (maiorNumero)
}

console.log(recebeNumeros(numeros))

/* 
Operador spread (...): Ao colocar (...numeros) dentro dos parênteses de Math.max(), 
você está "expandindo" o array numeros e passando cada um de seus elementos como 
um argumento separado para a função.
*/
