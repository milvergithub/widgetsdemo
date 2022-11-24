const commonjs = require('rollup-plugin-commonjs')
const { terser } = require('rollup-plugin-terser')

module.exports = {
  input: 'main.js',
  output: [{
    file: 'bundle.js',
    format: 'iife',
    plugins: [terser()]
  }],
  plugins: [
    commonjs()
  ]
}
