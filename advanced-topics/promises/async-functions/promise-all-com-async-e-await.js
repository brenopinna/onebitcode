function waitFor(seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}

const numbers = [4, 5, 67, 25, 2]

async function execute() {
  console.time("map") //começa a contagem 'map'
  // retorna a array de resultados, pois usei o await para esperar
  // a promise ser resolvida
  const squares = await Promise.all(
    // vai retornar um array de promises, pois a callback é
    // assíncrona.
    numbers.map(async number => {
      await waitFor(2)
      return number ** 2
    })
  )

  console.log(squares)

  // o tempo retornado será de pouco mais de 2 segundos, mesmo
  // tendo diversas promises que esperam 2 segundos. isso ocorre
  // pois todas elas estão sendo executadas paralelamente, ao mesmo tempo,
  // demonstrando uma grande vantagem do assincronismo.
  console.timeEnd("map") // encerra a contagem 'map' e loga no console.
}

execute()
