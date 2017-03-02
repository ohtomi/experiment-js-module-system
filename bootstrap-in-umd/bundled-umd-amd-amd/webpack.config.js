const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundled-umd-amd-amd.js',
    library: 'UmdAmdAmd',
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
      'amd-consuming-amd': __dirname + '/../../amd-consuming-amd/src/main',
      'amd/consuming-amd/dep': __dirname + '/../../amd-consuming-amd/src/dep',
      'amd/providing-to-amd/main': __dirname + '/../../amd-providing-to-amd/src/main',
      'amd/providing-to-amd/dep': __dirname + '/../../amd-providing-to-amd/src/dep'
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/../../public'),
    publicPath: '/js/',
    watchContentBase: true
  }
};
