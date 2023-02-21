// npm i -D @babel/core @babel/cli @babel/preset-env

/*
  Instalei essas três dependências de desenvolvimento, sendo:
  @babel/core: núcleo do babel, ele que compila o código.
  @babel/cli: Ferramenta para interagir com o babel core na linha de comando.
  @babel/preset-env: configuração padrão para o babel
*/
// npx babel index.js => retorna no terminal o código com pequenas correções
// npx babel index.js --out-file dist.js => Cria um arquivo dist.js com as modificações do babel.
/*
  npx babel index.js --out-file dist.js --presets=@babel/preset-env:
  cria o arquivo dist.js com as modificações do babel, seguindo o preset-env.
*/
// npx babel [arquivo a converter] --out-file [arquivo convertido] --presets=[presets separados por virgula]
// npx babel [diretorio a converter] --out-dir [diretorio convertido] --presets=[presets separados por virgula]

const mean = (...numbers) => numbers.reduce((acc, num) => acc + num, 0) / numbers.length

console.log(mean(2, 6, 3, 7, 4) + " = 4.4")

const weightedMean = (...entries) =>
  mean(
    ...entries.reduce((acc, { number, weight }) => {
      for (let i = 0; i < (weight ?? 1); i++) acc.push(number)
      return acc
    }, [])
  )

console.log(
  weightedMean({ number: 7, weight: 2 }, { number: 9, weight: 5 }, { number: 3 }) +
    " = 7.75"
)

const median = (...numbers) => {
  const medianIndex = []
  medianIndex.push(Math.floor(numbers.length / 2))
  if (!(numbers.length % 2)) medianIndex.push(medianIndex[0] - 1)
  return mean(...medianIndex.map(index => numbers.sort((a, b) => a - b)[index]))
}

console.log(median(4, 5, 2, 7, 42, 99) + " = 6")

const mode = (...numbers) => {
  const count = numbers.reduce((acc, value) => {
    acc[value] = acc[value] ? ++acc[value] : 1
    return acc
  }, {})
  const modeNumber = Object.entries(count).reduce(
    (acc, [number, count]) => {
      if (count > acc.biggestCount) {
        acc.numbers = [Number(number)]
        acc.biggestCount = count
      } else if (count === acc.biggestCount) {
        acc.numbers.push(Number(number))
      }
      return acc
    },
    { biggestCount: 0, numbers: [] }
  )
  return modeNumber.numbers
}
console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4) + " = 4")
