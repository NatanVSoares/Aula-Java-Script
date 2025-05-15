const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const projetos = [{
  titulo:"Projeto Cep",
  descricao:"Buscador de CEP com informações completas de endereços utilizando API ViaCEP, desenvolvido com JavaScript moderno. ",
  imagem:"https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
  link:"link-aqui"
},

{
  titulo:"Projeto Zumbi",
  descricao:"Neste projeto, exploraremos a ciência por trás dos zumbis e investigaremos se eles poderiam ser uma possibilidade real. ",
  imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiifK56GhO0QIByU26vfZ30YMSA1B9ALfAQ&s",
  link:"link-aqui"
}
]

const galeriaProjetos = document.getElementById('galeriaProjeto');

projetos.forEach(projeto => {

  galeriaProjetos.innerHTML += `
 <article class="project-card">
            <div
              class="project-image"
              style="
                background-image: url('${projeto.imagem}');
              "
            ></div>
            <div class="project-info">
              <h3>${projeto.titulo}</h3>
              <p>
                ${projeto.descricao}
              </p>
              <a href="${projeto.link}" class="project-link">Ver Detalhes</a>
            </div>
          </article>
                                `

})




                                
                                