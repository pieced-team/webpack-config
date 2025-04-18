const { merge } = require('webpack-merge');
const devConfig = require('./devConfig');
const prodConfig = require('./prodConfig');

const detectBuildEnv = (env, args) => {
  const nodeEnv = process.env.NODE_ENV || args.mode;
  const isDev = nodeEnv === 'development' || env.WEBPACK_SERVE;
  const isProd = nodeEnv === 'production' || env.WEBPACK_BUILD;

  return {
    isDev,
    isProd,
  };
};

exports.getWebConfig = (...config) => (env, args) => {
  const { isDev, isProd } = detectBuildEnv(env, args);

  const mergeFn = (baseConfig) => {
    const webConfig = config.reduce(
      (preConfig, curConfig) => {
        if (typeof curConfig === 'function') return merge(preConfig, curConfig(env, args, preConfig));

        return merge(preConfig, curConfig);
      },
      baseConfig,
    );

    return merge(webConfig, { target: 'web' });
  };

  if (isDev) return mergeFn(devConfig);
  if (isProd) return mergeFn(prodConfig);

  throw new Error('No matching configuration was found!');
};
