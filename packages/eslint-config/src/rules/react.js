// https://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': 0,
    'react/prop-types': 0,
    'react/no-unstable-nested-components': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 'off',
    'react/no-unknown-property': 0,
    'react/button-has-type': 0,
  },
};
