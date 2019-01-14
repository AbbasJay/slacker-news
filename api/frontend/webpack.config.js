const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  watch: true,
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [{ loader: miniCssExtractPlugin.loader }, "css-loader"]
      }
    ]
  },
  plugins: [new miniCssExtractPlugin({ filename: "styles.css" })]
};
