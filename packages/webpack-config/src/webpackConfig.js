const { merge } = require('webpack-merge');
const devConfig = require('./devConfig');
const prodConfig = require('./prodConfig');

module.exports = (config = {}) => (env, args) => {
  const mergeConfig = typeof config === 'function' ? config(env, args) : config;
  const nodeEnv = process.env.NODE_ENV || args.mode;

  if (nodeEnv === 'development') return merge(devConfig, mergeConfig);
  if (nodeEnv === 'production') return merge(prodConfig, mergeConfig);

  throw new Error('No matching configuration was found!');
};
