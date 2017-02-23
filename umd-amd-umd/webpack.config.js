const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    library: 'UmdAmdUmd',
    libraryTarget: 'umd'
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
      'amd-consuming-umd': __dirname + '/../amd-consuming-umd/src/main',
      'amd/consuming-umd/dep': __dirname + '/../amd-consuming-umd/src/dep',
      'umd/providing-to-amd/bundle': __dirname + '/../public/js/umd/providing-to-amd/bundle'
    }
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
