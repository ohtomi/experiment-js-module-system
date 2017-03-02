const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundled-umd-amd-umd.js',
    library: 'UmdAmdUmd',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    alias: {
      'amd-consuming-umd': __dirname + '/../../amd-consuming-umd/src/main',
      'amd/consuming-umd/dep': __dirname + '/../../amd-consuming-umd/src/dep',
      'umd/providing-to-amd/bundle': __dirname + '/../../public/js/umd/providing-to-amd/bundle'
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/../../public'),
    publicPath: '/js/',
    watchContentBase: true
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
