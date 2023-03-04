async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be of type number")
  }
  return a + b
}

async function execute() {
  asyncSum(50, 33).then(result => {
    console.log(result)
  })
}
async function awaitExecute() {
  // o await faz o seguinte: ele trava o código abaixo dele até
  // que a promise seja resolvida.

  // OBS: o await só pode ser usado dentro de funções assíncronas.

  // essa sintaxe com await facilita pois com ela o código pode ser trabalhado
  // como se fosse síncrono.

  // para lidar com as promises rejeitadas usando o await, deve-se
  // colocar a promise num bloco trycatch, sendo o bloco catch equivalente
  // ao (promise).catch()
  try {
    const result = await asyncSum("e", 33)
    console.log(result)
    // vários outros procedimentos...
    console.log("Só é executado quando a promise é resolvida.")
  } catch (rejectionReason) {
    console.log(rejectionReason)
  }
}

execute()
awaitExecute()
