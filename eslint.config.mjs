import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    plugins: {
      '@nx': nx,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],

    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
              bannedExternalImports: ['@broadcaster-api/*'],
            },
          ],
        },
      ],
      // Deaktivierte Regeln
      'prefer-const': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-var': 'off',
      'no-prototype-builtins': 'off',
      'prefer-rest-params': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-empty': 'off',
      'no-useless-escape': 'off',
      'no-control-regex': 'off',
      'prefer-spread': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'no-extra-semi': 'off',
      '@typescript-eslint/ban-types': 'off', // Neue deaktivierte Regel
    },
  },
  ...compat.extends('plugin:@nx/typescript').map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {},
  },
  ...compat.extends('plugin:@angular-eslint/template/recommended').map((config) => ({
    ...config,
    files: ['**/*.html'],
    ignores: ['**/index.html'],
  })),
  {
    files: ['**/*.html'],
    ignores: ['**/index.html'],

    rules: {
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/click-events-have-key-events': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/mouse-events-have-key-events': 'error',
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/no-autofocus': 'error',
      '@angular-eslint/template/no-distracting-elements': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/no-positive-tabindex': 'error',
      '@angular-eslint/template/use-track-by-function': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
    },
  },
];
