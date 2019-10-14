const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
        { test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
        { test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'},
        { test: /\.css$/, use: 'css-loader' }
      ]
  },
  plugins: [HtmlWebpackPluginConfig]
}