const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // enabled useful tools for development
  entry: {
    utils: './src/utils/index.ts',
    ui: {
      import: './src/ui/index.ts',
      dependOn: 'utils',
    },
    server: {
      import: './src/server/index.ts',
      dependOn: 'utils',
    },
  },
  output: {
    filename: '[name].bundle.js', // chunk
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: 'css-loader',
      },
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/ui/index.html' }),
  ],
};
