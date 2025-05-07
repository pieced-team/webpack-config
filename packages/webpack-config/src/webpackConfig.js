const { IS_DEV, IS_PROD } = require('./common/constants');
const { mergeConfig } = require('./common/utils');
const devConfig = require('./devConfig');
const prodConfig = require('./prodConfig');

exports.getWebConfig = (...config) => {
  const mergeFn = (mConfig) => mergeConfig('web', [mConfig].concat(config));

  if (IS_DEV) return mergeFn(devConfig);
  if (IS_PROD) return mergeFn(prodConfig);

  throw new Error('No matching configuration was found!');
};
