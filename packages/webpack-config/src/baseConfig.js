/**
 * @intro: webpack配置基类.
 */
const path = require('path');
const WebpackBarPlugin = require('webpackbar');
const FontConfigWebpackPlugin = require('@pieced/font-config-webpack-plugin');
const ImageConfigWebpackPlugin = require('@pieced/image-config-webpack-plugin');
const JsConfigWebpackPlugin = require('@pieced/js-config-webpack-plugin');
const MediaConfigWebpackPlugin = require('@pieced/media-config-webpack-plugin');
const StyleConfigWebpackPlugin = require('@pieced/style-config-webpack-plugin');

const resolve = (dir) => path.join(process.cwd(), dir);

module.exports = {
  entry: resolve('src/main'),
  output: {
    path: resolve('dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    new WebpackBarPlugin(),
    new FontConfigWebpackPlugin(),
    new ImageConfigWebpackPlugin(),
    new JsConfigWebpackPlugin(),
    new MediaConfigWebpackPlugin(),
    new StyleConfigWebpackPlugin(),
  ],
  performance: {
    hints: false,
  },
  stats: {
    entrypoints: false,
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
};
