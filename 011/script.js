/*11 - Suponha que temos a seguinte página HTML. 
Crie um script em JS (no arquivo script.js) que tenha uma função “mudaTexto()”, 
ela deve ser responsável por mudar o texto do elemento <h1> para “Novo Título” quando o botão for clicado. 
Dica: para selecionar o elemento você pode utilizar document.getElementById(“id-do-elemento”). 
Com esse elemento selecionado, você pode mudar o texto: variavelQueSelecionouOElemento.innerText = “Novo Título”.*/

function mudaTexto() {
    // Seleciona o elemento h1 com o ID "titulo"
    const titulo = document.getElementById("titulo");

    // Altera o texto interno do elemento para "Novo Título"
    titulo.innerText = "NOVO TÍTULO";
}


