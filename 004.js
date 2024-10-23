//TECNOLOGIA A SER APRENDIDA
const tecnologia = "React";

//FUNCAO QUE TEM COMO PARAMETRO A CONST TECNOLOGIA
function objetivoDoCurso(tecnologia){

    return (`FUNCTION -> Meu objetivo é aprender ${tecnologia}`)
}
//SAIDA DA FUNCAO
console.log(objetivoDoCurso(tecnologia))

//ARROW QUE TEM COMO PARAMETRO A CONST TECNOLOGIA
const objetivoDoCursoArrow = (tecnologia) => {

    return (`ARROW -> Meu objetivo é aprender ${tecnologia}`)
}
//SAIDA ARROW
console.log(objetivoDoCursoArrow(tecnologia))


