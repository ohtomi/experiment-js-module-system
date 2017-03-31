const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
    library: 'umd-consuming-amd/bundle',
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
    'react': 'react',
    'react-dom': 'react-dom',
    'amd-providing-to-umd': 'amd-providing-to-umd/main'
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/../public'),
    publicPath: '/js/umd-consuming-amd/',
    watchContentBase: true
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
