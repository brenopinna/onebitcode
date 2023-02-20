const render = require("./render")
const store = require("./store")

console.log("INDEX.JS INICIALIZADO...")
render()
store()
console.log("INDEX.JS FINALIZADO...")

// na hora de usar a importação/exportação com CommonJS, o próprio
// VSCode avisa que é melhor mudar para um ES Module, pois é mais atualizado.

// além disso, os CommonJS Modules não rodam diretamente no navegador, só no backend.
