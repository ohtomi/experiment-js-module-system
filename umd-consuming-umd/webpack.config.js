module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    library: 'UmdConsumingUmd',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: {
    'umd-providing-to-umd': 'umd/providing-to-umd/bundle'
  }
};
