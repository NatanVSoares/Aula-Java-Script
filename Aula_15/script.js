async function carregarCarros(){
    const url ='http://localhost:3000/carros'
    const resposta = await fetch(url)
    const todosCarros = await resposta.json()
    console.log(todosCarros)
    const divGaleria =document.getElementById('galeria')

    divGaleria.innerHTML = ''

    todosCarros.forEach(carro => {
        divGaleria.innerHTML += `<div>
        <h2>${carro.modelo} - ${carro.ano}</h2> 
        <img src="${carro.imagem}" alt="">
        <button onclick="apagar('${carro.id}')">Deletar</button>
        <button onclick="carregarDadosNos('${carro.id}')">Editar</button>
    </div>
    `
    
    })
    
}


async function editar(){
    const modeloInput = document.getElementById('modelo').value
    const anoInput = document.getElementById('ano').value
    const urlImagemInput= document.getElementById('urlImagem').value
    const idInput = document.getElementById('id').value


    const dadosNovoCarro ={

        modelo: modeloInput,
        ano: anoInput,
        imagem: urlImagemInput,
        id: idInput
    }
    

    const url= `//localhost:3000/carros/${idInput}`






    const resposta = await fetch (url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosNovoCarro)
    })
                           
    alert('Seu carro foi cadastrado com sucesso ! ')

}



async function CarregarUmCarroSo(id) {
     const url =`http://localhost:3000/carros/${id}`
     const resposta = await fetch(url)
     return await resposta.json()

}

async function carregarDadosNos(id){
    const dadosUmCarroSo = await CarregarUmCarroSo(id)
    const modeloInput= document.getElementById('modelo')
    const anoInput= document.getElementById('ano')
    const idInput= document.getElementById('id')
    const urlImagemInput = document.getElementById('urlImagem')


    modeloInput.value = dadosUmCarroSo.modelo
    anoInput.value = dadosUmCarroSo.ano
    urlImagemInput.value = dadosUmCarroSo.imagem
    idInput.value = dadosUmCarroSo.id


}




async function apagar(id){
    const url =`http://localhost:3000/carros/${id}`
    const resposta = await fetch (url, {
        method: 'DELETE'
    })

    alert('Carro excluído com sucesso !')

}
    



async function cadastrar(){
    const modeloDigitado = document.getElementById('modelo').value
    const anoDigitado = document.getElementById('ano').value
    const urlImagemDigitada = document.getElementById('urlImagem').value


    const dadosNovoCarro ={

        modelo: modeloDigitado,
        ano: anoDigitado,
        imagem: urlImagemDigitada
    }
    

    const url= '//localhost:3000/carros'






    const resposta = await fetch (url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosNovoCarro)
    })
                           
    alert('Seu carro foi cadastrado com sucesso ! ')

}

   

carregarCarros()

