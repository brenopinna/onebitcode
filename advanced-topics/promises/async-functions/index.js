// ao colocar a palavra reservada async na frente de function,
// o javascript já entende que a função retornará uma promise.
async function asyncSum(a, b) {
  // return new Promise((resolve, reject) => {
  //   if (typeof a !== "number" || typeof b !== "number") {
  //     reject("arguments must be of type number")
  //   } else {
  //     resolve(a + b)
  //   }
  // })

  // esse retorno equivale ao resolve(a + b) do bloco comentado acima
  return a + b
}

async function asyncSubtraction(a, b) {
  // return new Promise((resolve, reject) => {
  //   if (typeof a !== "number" || typeof b !== "number") {
  //     reject("arguments must be of type number")
  //   } else {
  //     resolve(a - b)
  //   }
  // })

  // OBS: Não apaguei os blocos, só comentei, pra ter um critério
  // de comparação pra ver como o async ajuda.

  // esse retorno equivale ao resolve(a - b) do bloco comentado acima
  return a - b
}

const sumResult = asyncSum(50, 33)
const subtractionResult = asyncSubtraction(50, 30)

Promise.all([sumResult, subtractionResult])
  .then(allResults => console.log(allResults))
  .catch(err => console.log(err))

///////////////////////////////////////////////////////////////////////

const numbers = [4, 9, 13, 77]

async function asyncSquare(number) {
  // return new Promise((resolve, reject) => {
  //   if (typeof number !== "number") {
  //     reject(false)
  //   } else {
  //     resolve(number ** 2)
  //   }
  // })

  return number ** 2
}

Promise.all(numbers.map(number => asyncSquare(number)))
  .then(results => console.log(results))
  .catch(err => console.log(err))
