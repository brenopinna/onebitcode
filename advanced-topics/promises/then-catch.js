function executePromise() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada...")
    setTimeout(() => {
      if (true) {
        reject("Porque sim.")
      } else {
        console.log("Resolvendo a promise...")
        // esse resultado do resolve que será pego pelo then
        resolve(42)
      }
    }, 1000)
  })
}

// esses métodos são encadeados pois eles retornam a promise.
// além disso, eles são executados somente ao término da promise,
// o que facilita o trabalho com o assincronismo.
// then => trabalha com o resultado da promise resolvida.
// catch => trabalha com o resultado da promise rejeitada
// finally => executa sempre, ao término da promise, seja rejeitada ou resolvida.
executePromise()
  .then(result => {
    console.log("A promise foi resolvida e o resultado foi " + result)
  })
  // pode chamar esse param de reason, error, enfim, o motivo pelo qual foi rejeitada.
  .catch(reason => {
    console.log("A promise foi rejeitada! Motivo: " + reason)
  })
  .finally(() => {
    console.log("A promise foi finalizada.")
  })
