const { merge } = require('webpack-merge');
const devConfig = require('devConfig');
const prodConfig = require('prodConfig');

module.exports = (config = {}) => (env, args) => {
  const mergeConfig = typeof config === 'function' ? config(env, args) : config;

  if (args.mode === 'development') return merge(devConfig, mergeConfig);
  if (args.mode === 'production') return merge(prodConfig, mergeConfig);

  throw new Error('No matching configuration was found!');
};
