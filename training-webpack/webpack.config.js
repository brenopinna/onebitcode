const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const path = require("path")

module.exports = {
  target: ["web", "es5"], // transforma o arquivo final (target) em es5, voltado para o ambiente web.
  mode: "production",
  plugins: [new MiniCssExtractPlugin()],
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    // em modo de produção, vai usar esse minimizer no css.
    minimizer: [
      // serve para carregar o minimizer padrão do webpack, senão
      // não minimiza o js
      `...`,
      // minmizer do css
      new CssMinimizerPlugin(),
    ],
    // essa opção ativa/desativa o minimizer geral, do bundler js também.
    // minimize: true,
  },
}
