const mergeFn = require('lodash/merge');
const config = require('./config');

module.exports = class JsConfigWebpackPlugin {
  constructor(options = {}) {
    this.options = options;

    this.getOptions = this.getOptions.bind(this);
  }

  apply(compiler) {
    const { getOptions } = this;

    const opt = getOptions(compiler);
    const cfg = config(opt);
    // Merge config
    if (opt.filename) {
      // eslint-disable-next-line
      compiler.options.output.filename = opt.filename;
    }
    if (opt.chunkFilename) {
      // eslint-disable-next-line
      compiler.options.output.chunkFilename = opt.chunkFilename;
    }
    compiler.options.module.rules.push(...cfg.module.rules);
    cfg.plugins.forEach((plugin) => plugin.apply(compiler));
  }

  getOptions(compiler) {
    const { mode, target } = compiler.options;
    const isDev = mode === 'development';
    const isWeb = target === 'web';
    const defaultOpt = {
      suffix: ['js', 'jsx', 'mjs'],
      filename: isDev ? '[name].js' : 'static/js/[contenthash:10].js',
      chunkFilename: isDev ? '[name].js' : 'static/js/[contenthash:10].js',
      terser: {
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_debugger: true,
            pure_funcs: Object.keys(console).map((n) => `console.${n}`),
          },
        },
      },
    };
    return mergeFn({}, defaultOpt, this.options, { isDev, isWeb, context: compiler.context || process.cwd(), mode });
  }
};
