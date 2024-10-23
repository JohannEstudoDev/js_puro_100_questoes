//PARAMETRO CARREIRA
var carreira = "Programador";

//FUNCAO QUE TEM COMO PARAMETRO A VAR CARREIRA
function objetivoCarreira(carreira){

    return (`FUNCTION -> Meu objetivo é me tornar um ${carreira}`)
}
//SAIDA DA FUNCAO CARREIRA
console.log(objetivoCarreira(carreira))

//ARROW QUE TEM COMO PARAMETRO A VAR CARREIRA
const objetivoCarreiraArrow = (carreira) => {

    return (`ARROW -> Meu objetivo é me tornar um ${carreira}`)
}
//SAIDA ARROW
console.log(objetivoCarreiraArrow(carreira))
