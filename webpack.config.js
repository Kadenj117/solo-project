const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const HtmlPlugin = new HtmlWebPackPlugin({
//   template: "./client/index.html",
//   filename: "./index.html"
// })

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8080,
    publicPath: '/',
    inline: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/',
      }
    }
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        include: [path.resolve(__dirname, 'client')],
        exclude: /node_modules/,
        use: ['style-loader' , 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}