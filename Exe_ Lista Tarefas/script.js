function adicionarTarefas(){
    const descricaoTarefa = document.getElementById('tarefa').value 
    const listaTarefas = document.getElementById('tasklist')

    listaTarefas.innerHTML += `

        <li>
        <input type="checkbox" name="" id="">${descricaoTarefa}
        <button>Editar</button>
        <button class="delete-btn">Excluir</button>
        </li>
      `
}

function limparTudo() {
    const listaTarefas = document.getElementById('tasklist');
    listaTarefas.innerHTML = ''; 
}


