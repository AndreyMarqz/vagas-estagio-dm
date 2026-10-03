import { perfil } from '../dadosMockados/vagas.js'

function conta(app) {
  app.innerHTML = `
    <section class="page-heading"><h1>Minha conta</h1></section>
    <section class="perfil-card">
      <div class="avatar" aria-hidden="true">${perfil.nome.split(' ').map((nome) => nome[0]).join('')}</div>
      <div><h2>${perfil.nome}</h2><p>${perfil.curso}</p><p>${perfil.semestre}</p></div>
    </section>
    <section class="section"><div class="section__cabecalho"><h2>Preferências</h2><span>Busca de vagas</span></div><div class="chips">${perfil.interesses.map((interesse) => `<span class="chip chip--estatico">${interesse}</span>`).join('')}</div></section>`
}

export default { url: '#conta', label: 'Conta', icone: '◯', pagina: conta }
