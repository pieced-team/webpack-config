// https://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'object-curly-newline': 0,
    'max-len': 0,
    'no-debugger': 1,
    'no-nested-ternary': 0,
    'global-require': 0,
    'no-tabs': 0,
    camelcase: 0,
    'default-param-last': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
  },
};
