const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  // loaders
  module: {
    rules: [
      // css
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'Leaderboard',
      filename: 'index.html',
    }),
  ],
};