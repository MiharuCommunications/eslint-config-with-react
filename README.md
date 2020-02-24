# @miharu/eslint-config-with-react

[![npm version](https://badge.fury.io/js/%40miharu%2Feslint-config-with-react.svg)](https://badge.fury.io/js/%40miharu%2Feslint-config-with-react)

ESLint のルールセット

## 概要

+ TypeScript のプロジェクトで ESLint を利用するためのルールセットです
+ [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript) をベースに一部ルールの設定を変更しています


## 利用方法

TypeScript のプロジェクトに `@miharu/eslint-config-with-react` を追加します

```
yarn add -D @miharu/eslint-config-with-react
```

プロジェクトに `.eslintrc.js` を追加します。

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


## License

Open source [licensed as MIT](https://github.com/MiharuCommunications/eslint-config-with-react/blob/master/LICENSE).
