export function formatarBolsa(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function normalizar(texto = '') {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

export function obterParametrosHash() {
  const [, query = ''] = window.location.hash.split('?')
  return new URLSearchParams(query)
}

export function cardVaga(vaga) {
  return `
    <article class="vaga-card">
      <div class="vaga-card__topo">
        <span class="tag">${vaga.area}</span>
        <span class="modalidade">${vaga.modalidade}</span>
      </div>
      <h2>${vaga.titulo}</h2>
      <p class="empresa">${vaga.empresa}</p>
      <div class="vaga-card__dados">
        <span>${formatarBolsa(vaga.bolsa)}</span>
        <span>${vaga.bairro}</span>
      </div>
      <p class="requisito-resumo">${vaga.requisitos.slice(0, 2).join(' · ')}</p>
      <a class="link-card" href="#detalhe?id=${vaga.id}">Ver vaga <span aria-hidden="true">→</span></a>
    </article>`
}
