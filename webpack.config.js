const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
           { test: /\.html$/, use: "html-loader" }
        ]
     },
     plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"})
      ],
      mode: "development" ,
      devServer: {
        open: true, // Автоматически открыть браузер после запуска webpack-dev-server
        openPage: "" // URL при открытии браузера (пустая строка соответствует "/index.html")
  }
};


