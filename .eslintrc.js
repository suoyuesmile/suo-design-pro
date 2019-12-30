module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2, { MemberExpression: 'off' }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'no-loop-func': 2,
    'space-before-function-paren': ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }]
  },
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
