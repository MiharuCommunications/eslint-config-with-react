module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    "airbnb-typescript",
    "@miharu/eslint-config",
  ],

  rules: {
    'jsx-a11y/label-has-associated-control': ['error', { assert: "either" }],
  },
};
