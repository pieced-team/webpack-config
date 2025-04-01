const mergeFn = require('lodash/merge');
const ImageConfigWebpackPlugin = require('@pieced/image-config-webpack-plugin');

module.exports = class MediaConfigWebpackPlugin extends ImageConfigWebpackPlugin {
  getOptions(compiler) {
    const isDevelopment = compiler.options.mode === 'development';
    const defaultOpt = {
      suffix: ['webm', 'mp4', 'ogv', 'mp3', 'aac', 'ogg', 'wav'],
      parser: {
        dataUrlCondition: {
          maxSize: isDevelopment ? undefined : 1000,
        },
      },
      generator: {
        filename: isDevelopment ? '[path][name][ext]' : 'static/media/[contenthash:10][ext]',
      },
    };
    return mergeFn({}, defaultOpt, this.options);
  }
};
