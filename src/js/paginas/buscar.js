import { areas } from '../dadosMockados/vagas.js'

function buscar(app) {
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">OPORTUNIDADES PARA COMEÇAR</p>
      <h1>Encontre seu próximo estágio.</h1>
      <p class="hero__texto">Vagas simples, com informações claras sobre bolsa, requisitos e localização.</p>
      <form id="form-busca" class="busca-form">
        <label class="sr-only" for="termo-busca">Busque por cargo, empresa ou área</label>
        <input id="termo-busca" name="termo" placeholder="Cargo, empresa ou área" autocomplete="off" />
        <button type="submit">Buscar</button>
      </form>
    </section>
    <section class="section">
      <div class="section__cabecalho"><h2>Buscar por área</h2><span>Escolha uma opção</span></div>
      <div class="chips">
        ${areas.map((area) => `<a class="chip" href="#resultados?area=${encodeURIComponent(area)}">${area}</a>`).join('')}
      </div>
    </section>
    <section class="destaque">
      <p>Tem uma oportunidade?</p>
      <h2>Publique uma vaga para estudantes.</h2>
      <a href="#publicar">Publicar vaga →</a>
    </section>`

  document.getElementById('form-busca').addEventListener('submit', (evento) => {
    evento.preventDefault()
    const termo = new FormData(evento.currentTarget).get('termo').trim()
    window.location.hash = `#resultados?termo=${encodeURIComponent(termo)}`
  })
}

export default { url: '#buscar', label: 'Buscar', icone: '⌕', pagina: buscar }
