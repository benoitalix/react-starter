const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        { 
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              },
            }
          ],
        },
        {
          test: /\.(js|jsx)$/,
          loader:'babel-loader',
          exclude: '/node_modules/'
        },
      ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig
  ]
}