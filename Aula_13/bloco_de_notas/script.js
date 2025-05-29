async function carregarAnotacoes(){
    const url = "https://68378ed12c55e01d184a2c10.mockapi.io/anotaoes"
    try{
    const resposta = await fetch(url)
    const arrayAnotacoes = await resposta.json()
    console.log(arrayAnotacoes)
   

    const listaNotas = document.getElementById('listaNotas')
    listaNotas.innerHTML = ''

    arrayAnotacoes.forEach(anotacao => {
        listaNotas.innerHTML += `
        <div class="nota">
        <div>${anotacao.descricao}</div>
        <div class="data-nota">${anotacao.data}</div>
        <div class="acoes-nota">
          <button class="btn-editar" onclick="editarNota(this)">Editar</button>
          <button class="btn-excluir" onclick="deletarAnotacao('${anotacao.id}')">Excluir</button>
        </div>
      </div>
      `
    })
}

  catch (erro){
  console.error('Erro ao carregar anotação', erro)
              }
                                     }


async function cadastrarAnotacao(){

    const url = "https://68378ed12c55e01d184a2c10.mockapi.io/anotaoes"
    try{

    const descricaoDigitada  = document.getElementById('descricao').value
    const dataDigitada = document.getElementById('data').value

      if (!descricaoDigitada || !dataDigitada) {
        alert ('Você precisa preencher todos os campos')
        throw new Error('Você precisa preecher todos os campos')
      }
    

    const dadosAnotacao = {
        descricao: descricaoDigitada,
        data: dataDigitada
    }



    const resposta = await fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dadosAnotacao)

    })

    alert('Dados cadastrados com sucesso !')
    carregarAnotacoes()
  }
  catch (erro){
    console.error('Erro ao cadastrar anotação',erro)
  }

}

async function deletarAnotacao(id){
   const url = `https://68378ed12c55e01d184a2c10.mockapi.io/anotaoes/${id}`
   const resposta = await fetch(url,{
      method: 'DELETE'
      })
      alert('Anotação excluída com sucesso !')
      carregarAnotacoes()

}

carregarAnotacoes()









