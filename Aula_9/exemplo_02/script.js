let totalCliques = Number(localStorage.getItem('cliques'))

if (!totalCliques) {
    totalCliques = 0;
    localStorage.setItem('cliques', String(totalCliques));

}

function contadorCliques(){

    let totalCliques = Number(localStorage.getItem('cliques'))
    const spanCliques =document.getElementById("numeroCliques")
    totalCliques++   
    localStorage.setItem('cliques', String(totalCliques))
    spanCliques.innerHTML = totalCliques

}



