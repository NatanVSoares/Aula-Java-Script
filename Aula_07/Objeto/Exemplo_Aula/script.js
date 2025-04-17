const cachorro = {
    nome : 'Trafegar Law',
    idade : 5,
    raca : 'Pastor Alemão',
    linkFoto:'https://veniceoarsman.com/wp-content/uploads/2025/02/dog-man-social-2.jpg'
}


const divPai = document.getElementById('listaCachorros')
divPai.innerHTML += `
        <h3> ${cachorro.nome}</h3>
        <p>  ${cachorro.idade}</p>
        <p> ${cachorro.raca} </p>
         <img src='${cachorro.linkFoto}' alt="">

`