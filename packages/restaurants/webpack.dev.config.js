const path = require("path");
var DIST_DIR = path.join(__dirname, "/public/dist");
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //to clean out dist folder
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require('./package.json');

const devConfig = {
  mode: "development",
  output: {
    filename: "main.js",
    path: DIST_DIR,
    publicPath: "http://localhost:3001/",
    assetModuleFilename: "assets/[name][ext]",
  },
  devtool: "inline-source-map",
  devServer: {
    // hot: true,
    host: "127.0.0.1",
    allowedHosts: ["http://localhost:3000/", "http://localhost:3003/", "http://localhost:1337/"],
    open: true,
    contentBase: path.join(__dirname, "public/dist"),
    index: "index.html",
    writeToDisk: true,
    compress: true,
    port: 3001,
    historyApiFallback: {
      index: "index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          "html-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          "css-loader", 
          { 
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")()],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      title: "Restaurant Info Page"
    }),
    new Dotenv({
      path: "./.env",
      allowEmptyValues: true,
    }),
    new ESLintPlugin({
      fix: true,
    }),
    new ModuleFederationPlugin({
      name: "RestaurantInfoApp",
      remotes: {
        photogallery: "photogallery@http://localhost:3003/remoteEntry.js",
        reviews: "reviews@http://localhost:1337/remoteEntry.js",
      },
      shared: packageJson.dependencies
    })
  ],
};

module.exports = merge(commonConfig, devConfig);