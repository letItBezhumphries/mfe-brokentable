const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var SRC_DIR = path.join(__dirname, "/client/src");

module.exports = {
  entry: `${SRC_DIR}/Components/Index.js`,
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      // filename: "index.html",
      title: "Restaurant Info Page"
    }),
  ]
};
