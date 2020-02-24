# @miharu/eslint-config-with-react

[![npm version](https://badge.fury.io/js/%40miharu%2Feslint-config-with-react.svg)](https://badge.fury.io/js/%40miharu%2Feslint-config-with-react)

ESLint のルールセット


```
yarn add -D typescript @miharu/eslint-config-with-react
```


```js
module.exports = {
  root: true,
  extends: [
    "@miharu/eslint-config-with-react",
  ],
  parserOptions: {
    project: './tsconfig.json',
  },

  ignorePatterns: [
    "node_modules/",
  ],
};
```
