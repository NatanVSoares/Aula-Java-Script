async function carregarNomes(){
    const url = 'http://localhost:3000/usuarios'
    const resposta = await fetch(url)
    const dadosUsuarios = await resposta.json()
    const lista = document.getElementById('lista')
    lista.innerHTML= ''
    dadosUsuarios.forEach(usuario => {
        lista.innerHTML +=  
        
        `<li>
                ${usuario.nome}
                <button onclick="deletarUsuario('${usuario.id}')"> Deletar</button>
              
        </li>
        <br>
        `
        
    });

}


    async function deletarUsuario(id) {
        const url = `http://localhost:3000/usuarios/${id}`
        const resposta = await fetch(url,{
            method: 'DELETE'
        })

        alert('Nome excluído com sucesso')
    }






    

async function cadastrarUsuario(){
     const url = 'http://localhost:3000/usuarios'
    


    const nomeDigitado = document.getElementById('nome').value 
    const objetoUsuario = {
        nome: nomeDigitado
    }
    const resposta = await fetch(url, {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(objetoUsuario)
    })

    alert('Usuário cadastrado com sucesso !')

}

carregarNomes()


