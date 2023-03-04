// a assincronicidade permite que o código siga sem travar
// numa tarefa demorada, e usamos as promises para pegar o
// resultado dessas tarefas.

// a Promise recebe como parâmetro uma callback,
// que contém o código que vai trabalhar com assincronismo.

// essa callback recebe dois parâmetros: resolve e reject
const promise = new Promise((resolve, reject) => {
  console.log("A promise está sendo executada...")
  if (true) {
    reject("Promise rejeitada.")
  }
  setTimeout(() => {
    console.log("Resolvendo a promise...")
    resolve("Promise resolvida.") // resolve a promise, retornando o parâmetro passado.
  }, 1000)
})
// uma promise pode ter os seguintes "estados":
// pending
// resolved
// rejected

// vai dar erro pois não tem um catch
console.log(promise)

setTimeout(() => {
  console.log(promise)
}, 1001)
