const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "lib/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        // use: "babel-loader",
      },
      //   {
      //     test: /\.html$/,
      //     use: "html-loader",
      //   },
      //   {
      //     test: /\.sass$/,
      //     use: ["style-loader", "css-loader", "sass-loader"],
      //   },
    ],
  },
};
