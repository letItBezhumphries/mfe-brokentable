const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require('./webpack.common');
var DIST_DIR = path.join(__dirname, "/public/dist");
const packageJson = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "main.[contenthash].js",
    path: DIST_DIR,
    publicPath: "/restaurants/latest/",
    assetModuleFilename: "assets/[name][contenthash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")()],
              },
            },
          }
        ],
        sideEffects: true,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader',   
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")()],
              },
            },
          },
        ],
        sideEffects: true,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new Dotenv({
      path: "./.env",
      allowEmptyValues: true,
    }),
    new ESLintPlugin({
      fix: true,
    }),
    new ModuleFederationPlugin({
      name: "restaurants",
      remotes: {
        photogallery: `photogallery@${domain}/photogallery/latest/remoteEntry.js`,
        reviews: `reviews@${domain}/reviews/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);