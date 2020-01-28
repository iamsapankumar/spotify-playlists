module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: ['airbnb'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
  
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      'react/static-property-placement': 'off',
      'react/forbid-prop-types': 'off',
      'no-use-before-define': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/destructuring-assignment': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/prefer-stateless-function': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn', // <--- THIS IS THE NEW RULE
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['app'],
          extensions: ['.js', '.jsx'],
        },
      },
    },
  };
  