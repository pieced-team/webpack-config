// https://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-import-module-exports': 0,
    'import/prefer-default-export': 'off',
  },
};
