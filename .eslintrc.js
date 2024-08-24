const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
  // the following options are the default values
  indent: 2,
  quotes: 'single',
  semi: false,
  jsx: true,
  // ...
})

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        '@stylistic'
    ],
    "rules": {
        'react/react-in-jsx-scope': 0,
        "indent": ["error", 2],
        'react/jsx-indent': ["error", 2],
        "@typescript-eslint/consistent-type-imports": 0,
        "react/button-has-type": 2,
        "typescript-eslint/semi": "off",
        "semi": "error",
        ...customized.rules
    }
}
