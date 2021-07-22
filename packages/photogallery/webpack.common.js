const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  entry: {
    PhotoGallery: `${SRC_DIR}/index.js`,
    PhotoBanner: `${SRC_DIR}/bannerIndex.js`,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react", "@babel/env"],
            plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'photogallery.html',
      // inject: 'body'
    }),
  ]
};
