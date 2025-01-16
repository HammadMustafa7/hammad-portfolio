import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // General settings
  { ignores: ['dist'] }, // Ignore the build output directory

  {
    // Define rules for JavaScript and JSX files
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript features
      globals: globals.browser, // Use browser-specific global variables
      parserOptions: {
        ecmaVersion: 'latest', // Latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Use ES module syntax
      },
    },
    settings: {
      react: { version: 'detect' }, // Automatically detect React version
    },
    plugins: {
      react, // React-specific linting rules
      'react-hooks': reactHooks, // Enforce React Hooks rules
      'react-refresh': reactRefresh, // Support React Fast Refresh
      'jsx-a11y': jsxA11y, // Accessibility rules for JSX
    },
    rules: {
      // Base JS rules from ESLint
      ...js.configs.recommended.rules,

      // React-specific rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Accessibility rules
      ...jsxA11y.configs.recommended.rules,

      // Custom rule configurations
      'react/jsx-no-target-blank': 'off', // Disable target="_blank" warnings
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Warn if components are exported incorrectly for Fast Refresh
      ],
    },
  },
];
