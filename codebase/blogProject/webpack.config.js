const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  }
};