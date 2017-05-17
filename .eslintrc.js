module.exports = {
  extends: 'airbnb-base',
  plugins: [
      'import'
  ],
  rules: {
    semi: ['error', 'never'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-body-style': [1, 'as-needed'],
    'newline-per-chained-call': 0
  },
  "globals": {
    "Cypress": true,
    "cy": true,
    "describe": true,
    "it": true,
    "chai": true,
    "context": true,
    "beforeEach": true,
    "before": true,
    "expect": true,
    "localStorage": true
  }
}
