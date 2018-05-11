const path = require("path");
const webpack = require("webpack");
// HtmlWebpackPlugin will generate an index.html file in our output directory
// based on our index.html with the link to index_bundle.js inserted for us
const HtmlWebPackPlugin = require("html-webpack-plugin");
// copies public directory to output directory
const CopyWebpackPlugin = require("copy-webpack-plugin");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: __dirname + "/src",
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    // copy public directory (static assets) to dist
    new CopyWebpackPlugin([{ from: "./public", to: "public" }])
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  }
};
