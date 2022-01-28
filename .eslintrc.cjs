module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    babelOptions: {
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    },
    sourceType: 'module'
  },
  rules: {
  },
  plugins: [
    '@babel'
  ]
}
