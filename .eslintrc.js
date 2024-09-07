// const stylistic = require('@stylistic/eslint-plugin');

// const customized = stylistic.configs.customize({
//   // the following options are the default values
//   indent: 2,
//   quotes: 'single',
//   semi: true,
//   jsx: true,
//   "linebreak-style": 0
// //   "comma-dangle": ["error", {
// //     "arrays": "never",
// //     "objects": "never",
// //     "imports": "never",
// //     "exports": "never",
// //     "functions": "never"
// //     }]
//   // ...
// });

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//         jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//     '@stylistic',
//     '@typescript-eslint',
//   ],
//   globals: {
//     "IS_DEV": true
//   },
//   rules: {
//     'react/react-in-jsx-scope': 0,
//     'indent': ['error', 2],
//     'react/jsx-indent': ['error', 2],
//     '@typescript-eslint/consistent-type-imports': 0,
//     'react/button-has-type': 2,
//     '@typescript-eslint/semi': 'error',
//     'semi': 'off',
//     'no-unexpected-multiline': 'error',
//     '@typescript-eslint/strict-boolean-express': 'off',
//     'import/no-unresolved': 'off',
//     'import/extensions': 'off',
//     'import/prefer-default-export': 'off',
//     'no-unused-vars': 'off',
//     "@typescript-eslint/no-unused-vars": "warn",
//     'import/no-extraneous-dependencies': 'off',
//     'no-shadow': 'off',
//     'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
//     'no-return-assign': 'off',
//     ...customized.rules,
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2, { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    'linebreak-style': 'off',
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-return-assign': 'off',
  },
  globals: {
    IS_DEV: true,
  },
};
