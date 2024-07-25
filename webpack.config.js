const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    babelpolyfill: "@babel/polyfill",
    index: "./src/js/main.js",
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "js/[name].docs.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
