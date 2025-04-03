function cadastrarInfoproduto(){
    console.log('fgfdgh')
    const nomeDigitado = document.getElementById('nome').value 
    const precoDigitado = document.getElementById('preco').value
    const urlImagemDigitado = document.getElementById ('imagem').value

    const divPai= document.getElementById('listaInfoprodutos')
    console.log(nomeDigitado,precoDigitado,urlImagemDigitado)


    divPai.innerHTML += `

    <h4>${nomeDigitado}</h4>
        <p>${precoDigitado}</p>
        <img src="${urlImagemDigitado}" alt="">
        <hr>
        
        `
}