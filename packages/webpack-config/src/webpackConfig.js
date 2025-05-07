const webpack = require('webpack');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');
const devConfig = require('./devConfig');
const prodConfig = require('./prodConfig');

const nodeEnv = process.env.NODE_ENV;
const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

exports.getWebConfig = (...config) => {
  if (!isDev && !isProd) throw new Error('NODE_ENV must be set to "development" or "production"!');

  const dotEnvObj = dotenv.config({
    path: ['.env', '.env.local', `.env.${nodeEnv}`, `.env.${nodeEnv}.local`],
    override: true,
  }).parsed || {};

  return () => {
    const mergeFn = (baseConfig) => {
      const webConfig = config.reduce(
        (preConfig, curConfig) => {
          if (typeof curConfig === 'function') {
            return merge(preConfig, curConfig({
              isDev,
              isProd,
              env: dotEnvObj,
              config: preConfig,
            }));
          }

          return merge(preConfig, curConfig);
        },
        merge(
          {
            plugins: [
              new webpack.DefinePlugin(Object.keys(dotEnvObj).reduce(
                (obj, key) => {
                  // eslint-disable-next-line no-param-reassign
                  obj[`process.env.${key}`] = JSON.stringify(dotEnvObj[key]);

                  return obj;
                },
                {},
              )),
            ],
          },
          baseConfig,
        ),
      );

      return merge(webConfig, { target: 'web' });
    };

    if (isDev) return mergeFn(devConfig);
    if (isProd) return mergeFn(prodConfig);

    throw new Error('No matching configuration was found!');
  };
};
