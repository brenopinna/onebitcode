// npm i -D webpack webpack-cli => mesmo princípio do babel, um core e uma CLI (command line interface)
// npm i dayjs => para testar o webpack

import dayjs from "dayjs"
import "./styles/index.css"
// por conta do uso do webpack, posso usar os CommonJS modules, pois ele vai
// converter para ESModules para funcionar no navegador.

alert(`Hoje é: ${dayjs().format("DD/MM/YYYY")}`)

// executando npx webpack, ele criou na pasta /dist um arquivo main.js, com o código
// empacotado e reduzido para melhor desempenho no navegador.

// se a pasta dist não existir, o webpack a cria, com o main.js dentro.

// após o empacotamento, mesmo se eu excluir a pasta node_modules, que contém os arquivos
// do dayjs, o código ainda funciona, pois tudo que é necessário está no main.js
