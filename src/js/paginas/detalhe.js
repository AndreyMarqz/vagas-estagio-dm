import { vagas } from '../dadosMockados/vagas.js'
import { formatarBolsa, obterParametrosHash } from '../utils.js'

function detalhe(app) {
  const id = Number(obterParametrosHash().get('id'))
  const vaga = vagas.find((item) => item.id === id)

  if (!vaga) {
    app.innerHTML = `<section class="estado-vazio"><h1>Vaga não encontrada.</h1><p>Confira as oportunidades disponíveis na lista.</p><a class="botao-secundario" href="#resultados">Ver vagas</a></section>`
    return
  }

  app.innerHTML = `
    <section class="page-heading detalhe-heading">
      <a class="voltar" href="#resultados">← Resultados</a>
      <div class="vaga-card__topo"><span class="tag">${vaga.area}</span><span class="modalidade">${vaga.modalidade}</span></div>
      <h1>${vaga.titulo}</h1>
      <p class="empresa">${vaga.empresa}</p>
    </section>
    <section class="detalhes">
      <div class="detalhe-linha"><span>Bolsa</span><strong>${formatarBolsa(vaga.bolsa)}</strong></div>
      <div class="detalhe-linha"><span>Local</span><strong>${vaga.bairro}</strong></div>
      <div class="detalhe-linha"><span>Jornada</span><strong>${vaga.cargaHoraria}</strong></div>
    </section>
    <section class="section detalhe-descricao"><h2>Sobre a vaga</h2><p>${vaga.descricao}</p><h2>Requisitos</h2><ul class="requisitos">${vaga.requisitos.map((requisito) => `<li>${requisito}</li>`).join('')}</ul></section>`
}

export default { url: '#detalhe', label: '', icone: '', pagina: detalhe }
