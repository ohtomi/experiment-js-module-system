const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    library: 'UmdProvidingToAmd',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
