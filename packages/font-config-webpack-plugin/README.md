<h1 align="center">@pieced/font-config-webpack-plugin 👋</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/@pieced/font-config-webpack-plugin" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@pieced/font-config-webpack-plugin.svg">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/font-config-webpack-plugin" target="_blank">
    <img alt="Download" src="https://img.shields.io/npm/dm/@pieced/font-config-webpack-plugin.svg?color=blue" />
  </a>
  <a href="https://www.npmjs.com/package/@pieced/font-config-webpack-plugin" target="_blank">
  <img alt="Webpack" src="https://img.shields.io/badge/webpack->=5.0.0-blue">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/font-config-webpack-plugin" target="_blank">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/pieced-team/font-config-webpack-plugin">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/font-config-webpack-plugin" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/l/@pieced/font-config-webpack-plugin" />
  </a>
</p>

> Automatically configuration webpack5 font loader

## Install

```sh
npm i --save-dev @pieced/font-config-webpack-plugin
```

## Webpack Config

```js
const FontConfigWebpackPlugin = require('@pieced/font-config-webpack-plugin');
module.exports = {
  plugins: [new FontConfigWebpackPlugin()],
};
```

## Options

**suffix**

- `type array`
- `default ['woff', 'woff2', 'eot', 'ttf', 'otf']`

**generator**

- `type object`
- [webpack.rule.generator](https://webpack.js.org/configuration/module/#rulegenerator)
- default

```js
const defaultGenerator = {
  filename: webpack.mode === 'development' ? '[path][name][ext]' : 'static/font/[contenthash:10][ext]',
}
```
