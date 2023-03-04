console.log("Iniciado")

// o bloco aqui no interior vai ser executado somente
// depois do tempo passado como parâmetro
const timeoutId = setTimeout(() => {
  console.log("3 segundos depois")
}, 3 * 1000)
// dica do isaac: quebrar os milissegundos em
//multiplicações que representem as unidades de tempo.

// o timeout retorna um id, uma identificação do
// timeout, que pode ser passada para a função
// clearTimeout (ela para o contador).

/*
  outra coisa interessante é que o timeout não trava
  a execução do resto do código: ele simplesmente
  demora para ser executado, mas o fluxo segue instantâneo.
*/

clearTimeout(timeoutId)

let seconds = 3
console.log(seconds)
// setInterval executa o bloco a cada intervalo de tempo passado (milissegundos)

// sobre os outros princípios, segue a mesma ideia do setTimeout
const intervalId = setInterval(() => {
  if (seconds > 1) {
    console.log(--seconds)
  } else {
    // tanto no timeout quando aqui, o id armazenado
    // fica disponível no escopo interno, podendo a própria função
    // dizer quando ela deve parar de executar.
    clearInterval(intervalId)
    console.log("LANÇAR!!!!!!!!!")
  }
}, 1000)
