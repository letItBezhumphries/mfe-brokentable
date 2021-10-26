const path = require("path");
var DIST_DIR = path.join(__dirname, "/public/dist");
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //to clean out dist folder
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require('./package.json');

const devConfig = {
  mode: "development",
  output: {
    filename: "[name].main.js",
    path: DIST_DIR,
    publicPath: "http://127.0.0.1:9000/",
    assetModuleFilename: "assets/[name][ext]",
  },
  devtool: "inline-source-map",
  devServer: {
    // hot: true,
    host: "127.0.0.1",
    devMiddleware: {
      index: false,
      writeToDisk: true,
    },
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: "index.html",
    },
    proxy: {
      "/": {
        target: "http://127.0.0.1:3001/",
        changeOrigin: true
      },
      "/wild": {
        target: "http://127.0.0.1:3001/wild",
        changeOrigin: true
      }
    }
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
          MiniCssExtractPlugin.loader, 
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new Dotenv({
      path: "./.deploy.env",
      allowEmptyValues: true,
    }),
    new ESLintPlugin({
      fix: true,
    }),
    new ModuleFederationPlugin({
      name: "RestaurantInfoApp",
      remotes: {
        photogallery: "photogallery@http://127.0.0.1:9001/remoteEntry.js",
        reviews: "reviews@http://127.0.0.1:9002/remoteEntry.js",
      },
      shared: packageJson.dependencies
    })
  ],
};

module.exports = merge(commonConfig, devConfig);