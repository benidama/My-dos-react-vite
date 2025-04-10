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

## github actions and linting and formatting

##### under .github/workflows/main.yml

name: CI/CD Pipeline

on:
pull_request:
branches: - main - develop

jobs:
build:
runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22

      - name: Install dependencies
        run: npm install

      - name: Run ESLint
        run: npm run lint

      - name: Run Prettier Check
        run: npm run format:check

##

##### under .github/dependabot.yml

version: 2
updates:

- package-ecosystem: 'npm'
  directory: '/'
  schedule:
  interval: 'weekly'
  open-pull-requests-limit: 10
  target-branch: 'develop'
  labels:
  - 'dependencies'
  - 'automerge'

## Husky setup

##### under.husky/pre-commit

#!/usr/bin/env sh
. "$(dirname -- "$0")/\_/husky.sh"

npx lint-staged

##### under .github/pull_request_template.md

Description
Add short description about changes implemented

Related Trello ticket
Link Trello ticket here
