module.exports = {
  root: true,
  extends: [
    "./rules/.eslintrc.js",
  ],

  parserOptions: {
    project: './tsconfig.json',
  },

  ignorePatterns: [
    "node_modules/",
  ],

  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true,
        'optionalDependencies': false,
        'peerDependencies': false,
      }
    ]
  }
};
