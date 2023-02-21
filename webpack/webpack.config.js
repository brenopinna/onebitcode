const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  // entry => ponto de entrada, arquivo a ser modificado
  // chave = nome do arquivo modificado; valor = caminho do arquivo a ser modificado
  // caso não seja especificado, a saída padrão vai ser dist/main.js e a entrada padrão vai ser src/index.js
  entry: {
    // por padrão o webpack usa a chave do ponto de entrada como nome da saída.
    main: "./src/index.js",
    hello: "./src/hello.js",
  },
  // com o mode development, o arquivo não fica otimizado para produção,
  // ficando um pouco mais legível para o desenvolvedor.
  mode: "production",
  output: {
    // esse método pega o caminho completo até o diretório atual (webpack), e o resto é o caminho relativo.
    path: path.resolve(__dirname, "dist"),
    // esse [name] é uma espécie de variável, para gerar um arquivo diferente para cada
    // ponto de entrada.
    filename: "[name].bundle.min.js",
  },
  // loaders são ferramentas do webpack para fazer transformações nos módulos.
  // os loaders seguintes incluem arquivos css nos módulos:
  // npm i -D style-loader css-loader

  // incluindo os loaders:
  module: {
    rules: [
      {
        // diz pro loader em qual arquivo ele será aplicado.
        test: /\.css$/, // pegue os arquivos terminados em ".css"
        // diz pro webpack qual loader usar
        // troquei o style-loader por esse, pq faz parte do funcionamento do plugin.
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // como o webpack lê tudo a partir do arquivo de entrada, é preciso inserir
        // o arquivo css no ponto de entrada, através da importação.
      },
    ],
  },
  // os loaders inserem esse arquivo css direto no arquivo js, porém tem um plugin que cria um
  // arquivo próprio pra ele:
  // npm i -D mini-css-extract-plugin
  // importa la em cima
  plugins: [new MiniCssExtractPlugin()],
  // após isso, vai criar na /dist um arquivo main.css (main pq ele segue o padrão da primeira entry.)
  // para usar esse css na página, tem q importar ele no head, q nem o script.
}
