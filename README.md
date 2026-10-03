# Vagas de Estágio

> Uma aplicação mobile-first para encontrar, consultar e comparar oportunidades de estágio.

![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=111)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Layout](https://img.shields.io/badge/Layout-Flexbox-2457D6)

## Sobre o projeto

O **Vagas de Estágio** foi desenvolvido para a disciplina de Dispositivos Móveis. A proposta é reunir oportunidades que normalmente ficam espalhadas entre e-mails e grupos de mensagens, apresentando de forma clara as informações mais importantes para estudantes: bolsa, requisitos, modalidade, bairro e carga horária.

O projeto é uma SPA (Single Page Application) simples, com navegação por hash e interface pensada primeiro para telas de celular.

## Funcionalidades

- Busca por cargo, empresa, área, bairro ou requisito.
- Filtro rápido por áreas de interesse.
- Lista de vagas com informações resumidas.
- Tela de detalhes para consultar e comparar cada oportunidade.
- Formulário para publicação de vagas.
- Tela de favoritos e perfil do estudante.
- Navegação inferior e cabeçalho fixo.

## Tecnologias

- HTML5
- CSS3 com Flexbox
- JavaScript puro (ES Modules)
- Vite

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)
- npm, instalado junto com o Node.js

### Instalação

```bash
git clone https://github.com/AndreyMarqz/vagas-estagio-dm.git
cd vagas-estagio-dm
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

### Build de produção

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`.

## Estrutura do projeto

```text
src/
├── css/                 # Estilos globais, navegação e telas
├── js/
│   ├── dadosMockados/   # Informações das vagas, favoritos e perfil
│   ├── navbar/          # Menu inferior gerado pelas rotas
│   ├── paginas/         # Módulos de cada tela
│   ├── rotas/           # Mapa central das rotas
│   └── main.js          # Inicialização e renderização da SPA
└── index.html
```

## Telas

| Tela | Descrição |
| --- | --- |
| Busca | Campo de pesquisa e filtros por área. |
| Resultados | Vagas que correspondem à busca realizada. |
| Detalhe | Informações completas de uma oportunidade. |
| Publicar | Formulário para divulgar uma vaga. |
| Favoritos | Oportunidades separadas para comparação. |
| Conta | Perfil e preferências do estudante. |

## Organização e interface

Cada página é um módulo JavaScript independente e está registrada em um mapa central de rotas. O menu é montado a partir desse mesmo mapa, evitando repetição de informações.

O layout utiliza apenas **Flexbox**, seguindo a proposta da atividade. A interface é responsiva, minimalista e prioriza a leitura em dispositivos móveis.

---

Projeto acadêmico desenvolvido para a disciplina de **Dispositivos Móveis** - FATEC Mogi das Cruzes.
