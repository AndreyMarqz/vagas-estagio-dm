import { vagas } from '../dadosMockados/vagas.js'
import { cardVaga, normalizar, obterParametrosHash } from '../utils.js'

function resultados(app) {
  const parametros = obterParametrosHash()
  const termo = parametros.get('termo') || ''
  const area = parametros.get('area') || ''
  const consulta = normalizar(termo)
  const lista = vagas.filter((vaga) => {
    const conteudo = normalizar(`${vaga.titulo} ${vaga.empresa} ${vaga.area} ${vaga.bairro} ${vaga.requisitos.join(' ')}`)
    return (!consulta || conteudo.includes(consulta)) && (!area || vaga.area === area)
  })
  const descricao = area ? `Área: ${area}` : termo ? `Busca: “${termo}”` : 'Todas as oportunidades'

  app.innerHTML = `
    <section class="page-heading">
      <a class="voltar" href="#buscar">← Voltar</a>
      <p class="eyebrow">${descricao}</p>
      <h1>${lista.length} ${lista.length === 1 ? 'vaga encontrada' : 'vagas encontradas'}</h1>
    </section>
    <section class="lista-vagas" aria-label="Resultado da busca">
      ${lista.length ? lista.map(cardVaga).join('') : `
        <div class="estado-vazio">
          <p class="estado-vazio__icone" aria-hidden="true">⌕</p>
          <h2>Nenhuma vaga encontrada.</h2>
          <p>Tente outra palavra ou escolha uma área diferente.</p>
          <a class="botao-secundario" href="#buscar">Nova busca</a>
        </div>`}
    </section>`
}

export default { url: '#resultados', label: '', icone: '', pagina: resultados }
