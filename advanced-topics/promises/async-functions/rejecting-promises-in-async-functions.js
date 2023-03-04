async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    // esse método retorna a promise rejeitada, por isso tem
    // que dar o return.
    return Promise.reject("arguments must be of type number")
  }
  // equivalente ao resolve()
  return a + b
}

async function asyncSubtraction(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be of type number")
  }
  // equivalente ao resolve()
  return a - b
}

const sumResult = asyncSum("s", 33)
const subtractionResult = asyncSubtraction(50, 30)

Promise.all([sumResult, subtractionResult])
  .then(allResults => console.log(allResults))
  .catch(err => console.log(err))
