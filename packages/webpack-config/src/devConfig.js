/**
 * @intro: webpack配置开发.
 */
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnvWebpackPlugin = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const baseConfig = require('./baseConfig');

const resolve = (dir) => path.join(process.cwd(), dir);

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 10080,
    static: true,
  },
  plugins: [
    new DotEnvWebpackPlugin({
      path: '.env.development',
      silent: true,
      systemvars: true,
      defaults: '.env',
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('index.ejs'),
      inject: true,
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  stats: 'errors-only',
});
