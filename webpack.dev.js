const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  output: {
    // filename: '[name].bundle.js',

    // path: path.resolve(__dirname, 'dist'),

    libraryTarget: 'var',
    library: 'Client',
  },

  devtool: 'inline-source-map',

  devServer: {
    writeToDisk: true,

    contentBase: './dist',

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  },

  // devServer: {
  //   contentBase: './dist',

  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  //     'Access-Control-Allow-Headers':
  //       'X-Requested-With, content-type, Authorization',
  //   },
  // },

  // stats: 'verbose',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
});
