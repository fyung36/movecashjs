
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';
import license from 'rollup-plugin-license'
import { name, version, main, module, browser, author } from './package.json'

const isProduction = process.env.NODE_ENV === 'production'


const PLUGINS = [
    resolve({
      jsnext: true,
      main: true
    }),
    typescript({
        tsconfig: './tsconfig.json'
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: [ '.js' ],
      ignoreGlobal: false,
      sourceMap: false
    }),
    license({
      banner: `
        ${name} v${version}
        Copyright 2023<%= moment().format('YYYY') > 2023 ? '-' + moment().format('YYYY') : null %> ${author}
      `
    })
  ]

export default {
  input: './src/index.ts',
  output: [{
    file: main,
    name: main,
    format: 'cjs',
    plugins: [
      isProduction && terser()
    ]
  }, {
    file: module,
    name: name,
    format: 'es'
  }, {
    file: browser,
    name: name,
    format: 'umd'
  }],
  plugins: PLUGINS
}