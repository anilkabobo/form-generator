module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        "after": false,
        "afterEach": false,
        "before": false,
        "beforeEach": false,
        "console": false,
        "describe": false,
        "it": false,
        "module": false,
        "process": false,
        "require": false,
        "window": false,
        "faker": false
    },
    "parser": "babel-eslint",
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'comma-dangle': [
            'error',
            'never'
        ]
    }
};