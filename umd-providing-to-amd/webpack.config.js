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
  }
};
