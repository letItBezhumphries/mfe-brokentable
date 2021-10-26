const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const DIST_DIR = path.join(__dirname, '/public/dist');
const packageJson = require('./package.json');
require('dotenv').config({ path: "./.production.env" });

const photosPublic = process.env.PHOTOS_PUBLIC;

console.log("here is the photosPublic: ", photosPublic);

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: DIST_DIR,
    publicPath: `${photosPublic}`,
    assetModuleFilename: 'assets/[name][contenthash][ext]'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')()]
              }
            }
          }
        ],
        sideEffects: true
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')()]
              }
            }
          }
        ],
        sideEffects: true
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
    new Dotenv({
      path: './.production.env',
      allowEmptyValues: true
    }),
    new ESLintPlugin({
      fix: true
    }),
    new ModuleFederationPlugin({
      name: 'photogallery',
      filename: 'remoteEntry.js',
      exposes: {
        './PhotoBanner': './client/src/bannerBootstrap.js',
        './PhotoGallery': './client/src/bootstrap.js'
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);