// eslint.config.js
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  files: ['frontend/**/*.js', 'frontend/**/*.jsx'],
  plugins: {
    react: reactPlugin,
    prettier: prettierPlugin
  },
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: { jsx: true }
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off'
  }
});
