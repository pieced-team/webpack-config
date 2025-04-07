// https://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/html-has-lang': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/control-has-associated-label': 0,
  },
};
