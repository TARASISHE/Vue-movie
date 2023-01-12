module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly'
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    indent: ['error', 2],
    'no-console': ['error', { allow: ['error'] }],
    quotes: ['error', 'single'],
    'array-callback-return': 'error',
    eqeqeq: ['error', 'always'],
    'no-multi-spaces': 'error',
    'keyword-spacing': 'error',
    'space-before-function-paren': 'error',
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'brace-style': 'error',
    'no-multiple-empty-lines': 'error',
    'operator-linebreak': 'error',
    'one-var': ['error', 'never'],
    'block-spacing': 'error',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'comma-dangle': 'error',
    'comma-style': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': 'error',
    semi: ['error', 'always'],
    // 'linebreak-style': ['error', 'unix'],
    'vue/script-setup-uses-vars': 1,
    'object-curly-spacing': ['error', 'always'],
    'no-prototype-builtins': 'off',
    'vue/html-indent': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/max-len': ['error', {
      'code': 120,
      ignoreHTMLAttributeValues: true
    }],
    'vue/multi-word-component-names': 'warn'
  }
};
