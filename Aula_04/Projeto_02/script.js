function adicionarTarefas(){
    const tituloDigitado = document.getElementById('nome').value
    const descricaoDigitado = document.getElementById('descricao').value
    const dataDigitado = document.getElementById('data').value

    const divPai = document.getElementById('listadeTarefas')

    divPai.innerHTML += `
        <h3>${tituloDigitado}</h3>
        <p>${descricaoDigitado}</p>
        <p>${dataDigitado}</p>
        
    
    `
}