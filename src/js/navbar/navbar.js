export function navbar(rotas) {
  const destino = document.getElementById('navbar')
  destino.innerHTML = `
    <nav>
      ${rotas.filter((rota) => rota.label).map((rota) => `
        <a href="${rota.url}" class="nav-item" aria-label="${rota.label}">
          <span aria-hidden="true">${rota.icone}</span>
          <span>${rota.label}</span>
        </a>`).join('')}
    </nav>`
}
