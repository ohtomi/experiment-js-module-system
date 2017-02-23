const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    library: 'UmdUmdAmd',
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
      'amd-providing-to-umd': __dirname + '/../amd-providing-to-umd/src/main',
      'amd/providing-to-umd/dep': __dirname + '/../amd-providing-to-umd/src/dep'
    }
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
