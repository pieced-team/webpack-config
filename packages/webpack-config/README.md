<h1 align="center">@pieced/babel-plugin-auto-css-modules 👋</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/@pieced/babel-plugin-auto-css-modules" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@pieced/babel-plugin-auto-css-modules.svg">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/babel-plugin-auto-css-modules" target="_blank">
    <img alt="Download" src="https://img.shields.io/npm/dm/@pieced/babel-plugin-auto-css-modules.svg?color=blue" />
  </a>
  <a href="https://www.npmjs.com/package/@pieced/babel-plugin-auto-css-modules" target="_blank">
  <img alt="Babel" src="https://img.shields.io/badge/babel->=7.0.0-blue">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/babel-plugin-auto-css-modules" target="_blank">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/pieced-team/babel-plugin-auto-css-modules">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/babel-plugin-auto-css-modules" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/l/@pieced/babel-plugin-auto-css-modules" />
  </a>
</p>

> Automatically identify CSS Modules

## Install

```sh
npm i @pieced/babel-plugin-auto-css-modules
```

## Usage

```js
import styles from 'a.scss'; //===>import styles from 'a.scss?modules'
```

`Without options:`

```json
{
  "plugins": [
    "@pieced/babel-plugin-auto-css-modules"
  ]
}
```

`With options:`

```json
{
  "plugins": [
    [
      "@pieced/babel-plugin-auto-css-modules",
      {
        "generate": "function"
      }
    ]
  ]
}
```

## Options

`generate type function`

```js
(value, suffix) => {
  const CSS_EXT_NAMES = ['.css', '.less', '.sass', '.scss', '.stylus', '.styl'];
  if (CSS_EXT_NAMES.includes(suffix)) return `${value}?modules`;
}
// return import styles from 'a.scss?modules'
```
