module.exports = {
  env: {
    "browser": true,
    "es2015": true
  },
  "extends": [
    "airbnb-base",
    'eslint:recommended'
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    'no-console': 'off',
    'no-debugger': 'off'
  }
};
