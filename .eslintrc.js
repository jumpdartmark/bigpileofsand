module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb',
        'airbnb-typescript'
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "react/function-component-definition": [2, { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }]
    }
};
