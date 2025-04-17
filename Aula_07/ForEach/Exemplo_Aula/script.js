const cachorros= ['Daniela','Melissa','Pandora','Mioto','Toddy']

const divPai = document.getElementById('paiCachorros')

cachorros.forEach((cachorro) => {
   
    divPai.innerHTML += `

        <h3>${cachorro}</h3>
        <img src="https://imgproxy.attic.sh/insecure/f:webp/q:90/w:1920/plain/https://imgproxy.attic.sh/TT6euwjtd844AaZqi2OOh41KLRDGLt6562HU9jfpM10/s:768:768:1/exar:1/t:1:FF00FF:false:false/aHR0cHM6Ly9hdHRp/Yy5zaC81aW85b2x6/Znh3dTVjdjJ6cnVs/aHFicjR5emx1" alt="">
        <hr> `

    
})