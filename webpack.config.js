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
      mode: "development"  
};


