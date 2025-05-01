localStorage.setItem('nome','Natan')

const nomeUsuario = localStorage.getItem('nome')
console.log(nomeUsuario)

localStorage.removeItem('nome')
const nomeAposRemover = localStorage.getItem('nome')
console.log(nomeAposRemover)


