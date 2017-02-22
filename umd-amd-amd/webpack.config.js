module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    library: 'UmdAmdAmd',
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
      'amd-consuming-amd': __dirname + '/../amd-consuming-amd/src/main',
      'amd/consuming-amd/dep': __dirname + '/../public/js/amd/consuming-amd/dep',
      'amd/providing-to-amd/main': __dirname + '/../amd-providing-to-amd/src/main',
      'amd/providing-to-amd/dep': __dirname + '/../public/js/amd/providing-to-amd/dep'
    }
  }
};
