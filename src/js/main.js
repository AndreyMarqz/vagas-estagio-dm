import { navbar } from './navbar/navbar.js'
import { mapaDeRotas } from './rotas/rotas.js'

const app = document.getElementById('app')
navbar(mapaDeRotas)

function rotaAtual() {
  return window.location.hash.split('?')[0] || '#buscar'
}

function atualizarNavegacao(url) {
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.toggle('nav-item--ativo', item.getAttribute('href') === url)
  })
}

function renderizarPagina() {
  const url = rotaAtual()
  const rota = mapaDeRotas.find((item) => item.url === url) || mapaDeRotas[0]
  rota.pagina(app)
  atualizarNavegacao(rota.url)
  app.focus()
}

window.addEventListener('hashchange', renderizarPagina)
renderizarPagina()
