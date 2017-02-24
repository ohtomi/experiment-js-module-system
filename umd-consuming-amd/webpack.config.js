const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    library: 'umd/consuming-amd/bundle',
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
  externals: {
    'amd-providing-to-umd': 'amd/providing-to-umd/main'
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
