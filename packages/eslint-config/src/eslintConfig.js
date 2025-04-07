module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint-config-airbnb',
    './rules/base',
    './rules/react',
    './rules/import',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
