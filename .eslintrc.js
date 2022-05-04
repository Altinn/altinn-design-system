module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-no-bind': 'off',
  },
  settings: {
    react: {
      version: '18',
    },
  },
};
