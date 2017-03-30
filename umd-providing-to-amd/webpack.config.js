const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
    library: 'umd-providing-to-amd/bundle',
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
  devServer: {
    contentBase: path.resolve(__dirname + '/../public'),
    publicPath: '/js/umd-providing-to-amd/',
    watchContentBase: true
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
