# Important setup for a good/strong project

1.Setup Tailwind CSS
2.Setup ESLint
3.Setup prettier
4.Setup dependabot
5.Setup husky and lint staged
6.Setup github actions and linting and formatting
7.Setup React
8.Setup rect router
9.Setup CommitLint and integrate with Husky
10.Protect main and develop GitHub branches

## Some important links

1.https://vimeo.com/1067923589/10db9d983e?ts=0&share=copy
the above link is related to conflicts when we are merging branches.

## Setup ESLint

The following codes are inserted in eslint.config.js:
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

/** @type {import('eslint').Linter.Config[]} \*/
export default [
{ files: ['**/\*.{js,mjs,cjs,jsx}'] },
{
languageOptions: {
parserOptions: {
ecmaFeatures: {
jsx: true,
},
},
globals: { ...globals.browser },
},
},
eslintPluginUnicorn.configs.recommended,
pluginJs.configs.recommended,
pluginReact.configs.flat.recommended,
{
settings: {
react: {
createClass: 'createReactClass',
pragma: 'React',
fragment: 'Fragment',
version: 'detect',
defaultVersion: '',
flowVersion: '0.53',
},
},
},
{
rules: {
'unicorn/filename-case': 'off',
'react/react-in-jsx-scope': 'off',
'react/jsx-uses-react': 'off',
'no-console': ['warn', { allow: ['warn', 'error'] }],
},
},
];


