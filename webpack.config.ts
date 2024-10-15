import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  mode: 'development', // or 'production'
  entry: './client/src/index.tsx',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader', // Turns CSS into CommonJS
          'postcss-loader', // Processes Tailwind and other PostCSS plugins
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images', // where the images will go under the output directory
              publicPath: 'images', // path used to generate URLs to the images
              name: '[name].[ext]', // retain original file names
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

export default config;
