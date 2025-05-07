<h1 align="center">@pieced/webpack-config 👋</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/@pieced/webpack-config" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@pieced/webpack-config.svg">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/webpack-config" target="_blank">
    <img alt="Download" src="https://img.shields.io/npm/dm/@pieced/webpack-config.svg?color=blue" />
  </a>
  <a href="https://www.npmjs.com/package/@pieced/webpack-config" target="_blank">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/pieced-team/babel-plugin-auto-css-modules">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/webpack-config" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/l/@pieced/webpack-config" />
  </a>
</p>

> webpack configuration

## Install

```sh
npm i @pieced/webpack-config -D
```

## Usage

```js
const {getWebConfig} = require('@pieced/webpack-config');

module.exports = getWebConfig();
```

## Usage Dev

```js
const {getWebConfig} = require('@pieced/webpack-config');

module.exports = getWebConfig({
  devServer: {
    // xxx
  },
});
```
