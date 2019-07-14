module.exports = {
    entry: "./src/app.js"
 };
 const path = require("path");

module.exports = {
   output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js"
   }
};
