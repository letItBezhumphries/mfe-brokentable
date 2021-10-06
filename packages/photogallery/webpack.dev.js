const path = require('path');
var DIST_DIR = path.join(__dirname, '/public/dist');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //to clean out dist folder
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require('./package.json');

const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR,
    publicPath: "http://127.0.0.1:9001/",
    assetModuleFilename: 'assets/[name][ext]'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "./public/dist"),
    index: 'photogallery.html',
    writeToDisk: true,
    compress: true,
    host: '127.0.0.1',
    port: 9001,
    // open: true,
    // openPage: 'restaurants/aBQtyRWEjX',
    historyApiFallback: {
      index: "photogallery.html",
    },
    proxy: {
      "*": "http://127.0.0.1:3003/",
      "restaurants/:id": "http://127.0.0.1:3003/restaurants/:id",
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new Dotenv({
      path: './.deploy.env',
      allowEmptyValues: true
    }),
    new ESLintPlugin({
      fix: true
    }),
    new ModuleFederationPlugin({
      name: "photogallery",
      filename: "remoteEntry.js",
      exposes: {
        "./PhotoBanner": "./client/src/bannerBootstrap.js",
        "./PhotoGallery": "./client/src/bootstrap.js",
      },
      shared: packageJson.dependencies
    }),
  ],
}

module.exports = merge(commonConfig, devConfig);




