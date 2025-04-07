<h1 align="center">@pieced/eslint-config 👋</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/@pieced/eslint-config" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@pieced/eslint-config.svg">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/eslint-config" target="_blank">
    <img alt="Download" src="https://img.shields.io/npm/dm/@pieced/eslint-config.svg?color=blue" />
  </a>
  <a href="https://www.npmjs.com/package/@pieced/eslint-config" target="_blank">
  <img alt="Babel" src="https://img.shields.io/badge/babel->=7.0.0-blue">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/eslint-config" target="_blank">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/pieced-team/babel-plugin-auto-css-modules">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/eslint-config" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/l/@pieced/eslint-config" />
  </a>
</p>

> Automatically identify CSS Modules

## Install

```sh
npm i @pieced/eslint-config -D
```

## Usage

```js
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
    '@pieced/eslint-config',
  ],
  rules: {},
};
```
