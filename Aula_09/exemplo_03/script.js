function salvarNome(){
    const nomeDigitado =document.getElementById('nome').value
    localStorage.setItem('nome',nomeDigitado)

     const titulo = document.getElementById('titulo')
     titulo.innerHTML = `Òlá ${nomeDigitado} `

}

let nome = localStorage.getItem('nome')

if (nome) {
    const titulo = document.getElementById('titulo')
    titulo.innerHTML = `Òlá ${nome} `
}

let listaNomes = ['João', 'Amanda']
localStorage.setItem('nomes',JSON,Stringify(listaNomes))

let nomesLocalStorage = JSON.parsa(localStorage.getItem('nomes'))

