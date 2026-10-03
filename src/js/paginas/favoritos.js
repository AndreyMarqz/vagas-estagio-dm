import { favoritosIds, vagas } from '../dadosMockados/vagas.js'
import { cardVaga } from '../utils.js'

function favoritos(app) {
  const favoritos = favoritosIds.map((id) => vagas.find((vaga) => vaga.id === id)).filter(Boolean)
  app.innerHTML = `
    <section class="page-heading"><p class="eyebrow">SUA LISTA</p><h1>Vagas favoritas</h1><p>Oportunidades que você separou para comparar depois.</p></section>
    <section class="lista-vagas">${favoritos.map(cardVaga).join('')}</section>`
}

export default { url: '#favoritos', label: 'Favoritos', icone: '♡', pagina: favoritos }
