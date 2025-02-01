import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

import pluginReact from 'eslint-plugin-react';
import pluginQuery from '@tanstack/eslint-plugin-query';
import pluginImport from 'eslint-plugin-import';
import storybook from 'eslint-plugin-storybook';

export default tseslint.config(
  { ignores: ['dist'] },
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  ...pluginQuery.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: pluginImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js 내장 모듈
            'external', // 외부 패키지
            'internal', // 내부 모듈 (예: @/utils)
            ['parent', 'sibling'], // 상위/현재 디렉토리
            'index', // 인덱스 파일
            'object', // 객체 형태의 import
            'type', // 타입 import (TypeScript)
            'unknown', // 기타 패턴
          ],
          pathGroups: [
            {
              pattern: 'react{*,*/**}',
              group: 'external',
              position: 'before', // React는 외부 라이브러리 중 최상단
            },
            {
              pattern: 'next{*,*/**}',
              group: 'external',
              position: 'after', // Next.js는 React 뒤에 위치
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before', // 내부 모듈은 외부 라이브러리 뒤
            },
            {
              pattern: './**/*.styles',
              group: 'sibling',
              position: 'after', // 스타일 파일은 디렉토리 import 뒤
            },
            {
              pattern: '*.css',
              group: 'index',
              position: 'after', // CSS 파일은 가장 마지막
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  }
);
