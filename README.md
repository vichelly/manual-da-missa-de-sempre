# Manual da Missa de Sempre

Site de estudo da Missa tradicional (Missal Romano de 1962):

- **Missa do acólito**: todas as respostas da Missa rezada, orações ao pé do altar, Confiteor (estrutura, treino por blocos e prova escrita), guia de movimentos com lados do altar e sinos, cartões e quiz.
- **Ordinário da Missa**: texto completo em latim e português com as posições dos fiéis, exame de consciência e os mandamentos com exercícios de memória.

Publicado em **https://vichelly.github.io/manual-da-missa-de-sempre/**.

## Rodar localmente

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm test           # testes (Vitest)
npm run lint       # ESLint
npm run build      # gera dist/ para publicar
```

Requer Node 20 ou mais recente.

## Arquitetura

```
src/
├── content/      Conteúdo litúrgico tipado (textos, respostas, passos). Sem lógica nem React.
├── domain/       Regras puras e testadas: normalização de texto, máscaras de memorização,
│                 comparação palavra por palavra, sorteio, alternativas, sessão de exercícios.
├── hooks/        Ligação entre o domínio e o React (sessão de prática, estado salvo no navegador).
├── ui/           Componentes visuais genéricos (Card, Button, ChoiceList, MaskedText…), sem conteúdo.
├── features/     Telas por funcionalidade:
│   ├── practice/     exercícios reutilizáveis (quiz de diálogo, memorização, prova escrita)
│   ├── acolyte/      respostas, pé do altar, Confiteor, guia, cartões
│   ├── ordinary/     Ordinário da Missa
│   ├── examination/  exame de consciência
│   └── commandments/ mandamentos
├── app/          Layout, navegação (fonte única das seções e abas) e rotas.
└── styles/       Tokens de design (cores, espaçamentos) e estilos globais.
```

As dependências seguem uma direção só: `app → features → ui/hooks → domain → content`.
O conteúdo não conhece a interface; a lógica não conhece o React. Assim:

- **corrigir um texto** é editar só `src/content/`;
- **mudar uma regra** (como a correção da prova escrita) é editar `src/domain/` e o teste ao lado;
- **criar uma aba** é adicionar a página em `features/` e uma linha em `app/navigation.tsx`.

O exame de consciência não salva nada de propósito. Os melhores resultados dos exercícios ficam só no navegador (`localStorage`).

## Deploy

O workflow `.github/workflows/deploy.yml` roda lint, testes e build a cada push e publica `dist/` no GitHub Pages.
Na primeira vez, em **Settings → Pages**, escolha **Source: GitHub Actions**.

O build usa caminhos relativos e rotas com `#`, então funciona em qualquer hospedagem estática.
Para usar o **Cloudflare Pages**: conecte o repositório, use `npm run build` como comando e `dist` como pasta de saída.

## Conteúdo

As posições e alguns costumes (toques do sino, segundo Confiteor, orações depois da Missa) variam de capela para capela; siga o livro e o costume da sua capela. As traduções portuguesas são próprias deste projeto.
