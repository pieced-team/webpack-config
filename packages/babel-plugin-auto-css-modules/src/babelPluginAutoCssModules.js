const { extname } = require('path');

const defaultHandle = (value, suffix) => {
  const CSS_EXT_NAMES = ['.css', '.less', '.sass', '.scss', '.stylus', '.styl'];
  if (CSS_EXT_NAMES.includes(suffix)) return `${value}?modules`;
};

module.exports = () => ({
  visitor: {
    ImportDeclaration({ node: { specifiers, source } }, { opts }) {
      const { value } = source;
      const generateHandle = opts.generate || defaultHandle;
      if (specifiers.length) {
        const newValue = generateHandle(value, extname(value));

        // eslint-disable-next-line no-param-reassign
        if (newValue) source.value = newValue;
      }
    },
  },
});
