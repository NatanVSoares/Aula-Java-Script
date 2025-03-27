function cadastrarItem(){
 
    const hamburguerSelecionado = document.getElementById('ciberhamburguer')
    itemDigitado.innerHtml += `

                <div class="card-alimento" >
                    <img  class="imagem-alimento" src="https://www.repstatic.it/content/contenthub/img/2023/11/22/130435773-458e9ad4-7617-469a-806f-c605e9f2cfa5.jpg">
                    <div class="info-alimento">
                        <h3 class="nome-alimento">X-Estrela Da Morte 💀☣️</h3>
                        <p class="descricao-alimento"> X- burguer com polvo a milanesa com calda de uranio de Scardia </p>
                        <p class="preco-alimento"> @& 001548586.00</p>
                 </div>
  
    `
}


colocar os valores de cada parte digitada pelo usuario !