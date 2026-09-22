# Engenharia em Dados

Prévia estática e responsiva do portal multidisciplinar de indicadores, pronta para publicação no GitHub Pages.

## Publicar no GitHub Pages

1. Crie um repositório público ou privado no GitHub.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. Em **Settings → Pages**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`.
5. Para usar `engenhariaemdados.com.br`, configure o domínio personalizado no GitHub Pages e ajuste os registros DNS no provedor do domínio.

## Integração do aplicativo de apontamento

No arquivo `dashboard-template.html` (e na página `andaime.html`), substitua o `href="#"` do botão **Abrir apontamento** pela URL pública do aplicativo.

## Estrutura

- `index.html`: seleção fluida das disciplinas.
- `andaime.html`: painel com integração destacada.
- Demais arquivos `.html`: painéis setoriais demonstrativos.
- `assets/styles.css`: identidade visual e responsividade.
- `assets/app.js`: dados demonstrativos e comportamento dos painéis.
