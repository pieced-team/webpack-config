const { merge } = require('webpack-merge');
const { IS_ENV_NORMAL, IS_PROD, IS_DEV } = require('./constants.js');

exports.mergeConfig = (target, configs) => {
  if (!IS_ENV_NORMAL) throw new Error("NODE_ENV must be set to 'development' or 'production'!");

  return configs.reduce(
    (preConfig, curConfig) => {
      if (typeof curConfig === 'function') {
        return merge(preConfig, curConfig({
          isDev: IS_DEV,
          isProd: IS_PROD,
          config: preConfig,
        }));
      }

      return merge(preConfig, curConfig);
    },
    { target },
  );
};
