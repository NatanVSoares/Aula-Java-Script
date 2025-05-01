const dadosStrangerThings = {
    id: 2993,
    url: "https://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: [
      "Drama",
      "Horror",
      "Science-Fiction"
    ],
    status: "Running",
    runtime: null,
    averageRuntime: 62,
    premiered: "2016-07-15",
    ended: null,
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: {
      time: "",
      days: []
    },
    rating: {
      average: 8.5
    },
    weight: 100,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
      officialSite: "https://www.netflix.com/"
    },
    dvdCountry: null,
    externals: {
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334"
    },
    image: {
      medium: "https://sm.ign.com/ign_br/tv/s/stranger-t/stranger-things_y6du.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/396/991288.jpg"
    },
    summary: "<p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>",
    updated: 1732642106,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/2993"
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2209857",
        name: "Chapter Nine: The Piggyback"
      }
    }
  }


  const titledaSerie = document.getElementById('title')
  titledaSerie.innerHTML  = dadosStrangerThings.name
  

const imagem = document.getElementById('poster')
imagem.src = dadosStrangerThings.image.medium

const genero = document.getElementById('genres')
genero.innerHTML = dadosStrangerThings.genres

const notaMedia= document.getElementById('rating')
notaMedia.innerHTML = dadosStrangerThings.rating.average

const dataEstreia = document.getElementById('premiered')
dataEstreia.innerHTML = dadosStrangerThings.premiered  

const canalExibicao = document.getElementById('channel')
canalExibicao.innerHTML = dadosStrangerThings.webChannel.name

const siteOficial = document.getElementById('officialSite')
siteOficial.href = dadosStrangerThings.officialSite



















