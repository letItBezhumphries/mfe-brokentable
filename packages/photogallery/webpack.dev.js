const path = require('path');
var DIST_DIR = path.join(__dirname, '/public/dist');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //to clean out dist folder
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require('./package.json');

const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR,
    publicPath: "http://localhost:3003/",
    assetModuleFilename: 'assets/[name][ext]'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "./public/dist"),
    index: 'photogallery.html',
    writeToDisk: true,
    compress: true,
    host: 'localhost',
    port: 3003,
    open: true,
    openPage: 'restaurants/aBQtyRWEjX',
    historyApiFallback: {
      index: "photogallery.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'photogallery.html'
    }),
    new Dotenv({
      path: './.env',
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




