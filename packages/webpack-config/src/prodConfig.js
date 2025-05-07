/**
 * @intro: webpack配置生产.
 */
const path = require('path');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./baseConfig');

const resolve = (dir) => path.join(process.cwd(), dir);

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('index.ejs'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: resolve('public'),
        noErrorOnMissing: true,
      }],
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          test: ({ resource }) => resource && /\.js$/.test(resource) && resource.indexOf(resolve('node_modules')) === 0,
        },
        async: {
          name: 'async',
          chunks: 'async',
          minChunks: 3,
        },
      },
    },
    runtimeChunk: true,
    nodeEnv: false,
  },
});
