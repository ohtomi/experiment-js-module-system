const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
    library: 'umd-bootstrapping-umd-umd/bundle',
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
    'umd-consuming-umd': 'umd-consuming-umd/bundle'
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/../../public'),
    publicPath: '/js/',
    watchContentBase: true
  }
};
