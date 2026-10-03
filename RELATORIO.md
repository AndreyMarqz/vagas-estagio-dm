# Relatório - Vagas de Estágio

## Problema e proposta

Vagas de estágio costumam circular por e-mail e grupos de mensagens, onde podem se perder antes de chegar aos estudantes interessados. A aplicação **Vagas de Estágio** centraliza uma amostra de oportunidades para que o estudante consulte, filtre e compare informações objetivas: requisitos, bolsa, modalidade e bairro.

Também há uma tela de publicação de vaga. Ela representa o outro lado do problema - quem divulga uma oportunidade informa os dados essenciais. A publicação valida o formulário e confirma a ação na tela.

## Estrutura e fluxo

O projeto segue o modelo estudado no KiOferta: uma SPA em JavaScript puro, criada com Vite, em que cada tela é um módulo e o roteamento usa o hash da URL. Um mapa central reúne as rotas e gera automaticamente o menu inferior.

As seis telas são:

1. Busca, com campo textual e áreas de interesse.
2. Resultados, com cards das vagas filtradas.
3. Detalhe, com informações completas para comparação.
4. Publicar vaga, com validação e confirmação local.
5. Favoritos, com uma seleção de vagas para consulta posterior.
6. Conta, com perfil e preferências fictícios.

O estudante pesquisa por termo ou área, abre um card e consulta os detalhes da vaga. A busca usa `filter` sobre os dados da aplicação e o detalhe usa `find` pelo identificador da vaga.

## Dados e interface

As vagas ficam em `src/js/dadosMockados/vagas.js`. Cada registro contém `id`, título, empresa, área, modalidade, bairro, bolsa, carga horária, requisitos e descrição. Perfil e favoritos seguem a mesma estrutura de dados da aplicação.

O layout é mobile-first e foi feito somente com Flexbox. Os principais usos são o menu inferior, os grupos de chips, os cards, o formulário e o agrupamento dos dados da vaga. Não foram usados CSS Grid, frameworks CSS ou frameworks JavaScript.

## Como executar

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
```
