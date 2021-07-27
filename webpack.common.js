const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',

  module: {
    rules: [
      {
        test: '/.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
    }),
  ],

  output: {
    filename: '[name].bundle.js',

    path: path.resolve(__dirname, 'dist'),

    libraryTarget: 'var',
    library: 'Client',
  },
};
