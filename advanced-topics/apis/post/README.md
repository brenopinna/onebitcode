# Requisições POST com Javascript

Para testar o verbo HTTP POST, precisamos de um backend. Como ainda não cheguei nessa parte, usarei a biblioteca **JSON Server**, que manipula um arquivo JSON, simulando um banco de dados.

Passos de sempre:

- `npm init -y`
- `npm i json-server`
- criar arquivo `db.json`
- no `package.json`:

```json
"scripts": {
  "server": "json-server --watch db.json"
}
```

- Rodar o "servidor": `npm run server`

Para mais detalhes, ir na página do npm dessa lib.

Para o Live Server não ficar atualizando a página quando fizer uma mudança no banco de dados, vá em Configurações, pesquise por live server e adiciona `**/*.json` nos arquivos a serem ignorados (cata ae q tu acha isso)
