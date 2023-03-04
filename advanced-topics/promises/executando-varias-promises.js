function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number")
    } else {
      resolve(a + b)
    }
  })
}

function asyncSubtraction(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number")
    } else {
      resolve(a - b)
    }
  })
}

const sumResult = asyncSum(50, 33)
const subtractionResult = asyncSubtraction(50, null)

// esse método recebe uma array de promises como parâmetro: then e catch
// serão baseados em todo o conjunto de promises: se TODAS derem certo,
// o then retornará TODOS os resultados das promises. se PELO MENOS UMA
// der errado, entrará no bloco catch, e não retorna os resultados
// que deram certo.
Promise.all([sumResult, subtractionResult])
  .then(allResults => console.log(allResults))
  .catch(err => console.log(err))

///////////////////////////////////////////////////////////////////////

const numbers = [4, 9, true, 13, 77]

function asyncSquare(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject(false)
    } else {
      resolve(number ** 2)
    }
  })
}

// como o map retorna uma array, e o asyncSquare retorna uma promise,
// o método all vai receber uma array de promises como parâmetro.
Promise.all(numbers.map(number => asyncSquare(number)))
  .then(results => console.log(results))
  .catch(err => console.log(err))

/////////// IMPORTANTE /////////////
// tem 2 blocos de Promise.all nesse arquivo, e o de cima vai dar erro.
// mesmo que venha primeiro na ordem, o log do erro vem somente depois do
// log dos resultados do segundo bloco, demonstrando o comportamente assíncrono.
