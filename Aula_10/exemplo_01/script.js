async function carregarNome(){
    const resposta = await fetch('dados.json')
    const dados = await resposta.json()


    const inputNome = document.getElementById('nome')
    inputNome.value = dados.nome

    const inputAltura = document.getElementById("altura")
    inputAltura.value = dados.altura

}

