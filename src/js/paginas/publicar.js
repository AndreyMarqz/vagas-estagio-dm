function publicar(app) {
  app.innerHTML = `
    <section class="page-heading"><p class="eyebrow">PARA EMPRESAS E ESTUDANTES</p><h1>Publicar uma vaga</h1><p>Preencha os dados principais para que estudantes comparem a oportunidade.</p></section>
    <form id="form-publicar" class="form-publicar" novalidate>
      <label>Título da vaga<input name="titulo" required placeholder="Ex.: Estágio em Desenvolvimento" /></label>
      <label>Empresa<input name="empresa" required placeholder="Nome da empresa" /></label>
      <label>Requisitos<textarea name="requisitos" required placeholder="Ex.: HTML, CSS e JavaScript básico"></textarea></label>
      <div class="form-linha">
        <label>Bolsa<input name="bolsa" required inputmode="decimal" placeholder="R$ 1.200" /></label>
        <label>Bairro<input name="bairro" required placeholder="Ex.: Centro" /></label>
      </div>
      <p id="mensagem-form" class="mensagem-form" aria-live="polite"></p>
      <button type="submit" class="botao-principal">Publicar vaga</button>
    </form>`

  document.getElementById('form-publicar').addEventListener('submit', (evento) => {
    evento.preventDefault()
    const formulario = evento.currentTarget
    const mensagem = document.getElementById('mensagem-form')
    if (!formulario.checkValidity()) {
      mensagem.textContent = 'Preencha todos os campos antes de publicar.'
      mensagem.className = 'mensagem-form mensagem-form--erro'
      formulario.reportValidity()
      return
    }
    mensagem.textContent = 'Vaga publicada com sucesso!'
    mensagem.className = 'mensagem-form mensagem-form--sucesso'
    formulario.reset()
  })
}

export default { url: '#publicar', label: 'Publicar', icone: '+', pagina: publicar }
