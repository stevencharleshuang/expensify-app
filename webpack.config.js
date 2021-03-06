const path = require('path');

module.exports = {
  entry: './src/App.jsx',
  // entry: './src/sandbox/redux-expensify.js',
  // entry: './src/sandbox/hoc.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.j(s|sx)$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  mode: 'none'
};

