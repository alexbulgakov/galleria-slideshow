module.exports = {
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'react',
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'style',
          'unknown',
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
          },
          type: {
            react: 'react',
          },
        },
        'newlines-between': 'always',
        type: 'line-length',
        order: 'desc',
      },
    ],
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 0,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:perfectionist/recommended-line-length',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  plugins: ['react', 'perfectionist'],
  root: true,
};
