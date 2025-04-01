const mergeFn = require('lodash/merge');
const config = require('./config');

module.exports = class FontConfigWebpackPlugin {
  constructor(options = {}) {
    this.options = options;

    this.getOptions = this.getOptions.bind(this);
  }

  apply(compiler) {
    const { getOptions } = this;

    const cfg = config(getOptions(compiler));
    // Merge config
    compiler.options.module.rules.push(...cfg.module.rules);
    cfg.plugins.forEach((plugin) => plugin.apply(compiler));
  }

  getOptions(compiler) {
    const isDevelopment = compiler.options.mode === 'development';
    const defaultOpt = {
      suffix: ['woff', 'woff2', 'eot', 'ttf', 'otf'],
      generator: {
        filename: isDevelopment ? '[path][name][ext]' : 'static/font/[contenthash:10][ext]',
      },
    };
    return mergeFn({}, defaultOpt, this.options);
  }
};
