import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import {terser} from "rollup-plugin-terser";
import * as meta from "./package.json";

const config = {
  input: "index.js",
  external: Object.keys(meta.dependencies || {}).filter(key => /^chrt-/.test(key)),
  output: {
    file: `dist/${meta.name}.js`,
    name: "chrt",
    format: "umd",
    indent: false,
    extend: true,
    exports: 'named',
    banner: `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author}`,
    globals: Object.assign({}, ...Object.keys(meta.dependencies || {}).filter(key => /^chrt-/.test(key)).map(key => ({[key]: "chrt"}))),
  },
  plugins: [
    json(),
    commonjs(),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      // sourceMaps: "both",
      babelrc: false,
    })
  ]
};

export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/${meta.name}.min.js`,
    },
    plugins: [
      ...config.plugins,
      uglify(),
      terser({
        output: {
          preamble: config.output.banner
        }
      })
    ]
  }
];
