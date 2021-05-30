import { uglify } from 'rollup-plugin-uglify';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import * as meta from './package.json';

export default [
  {
    input: 'index.js',
    external: Object.keys(meta.dependencies || {}).filter(key =>
      /^chrt-/.test(key)
    ),
    plugins: [json()],
    output: {
      file: 'dist/chrt.node.js',
      format: 'cjs'
      // exports: 'named',
    }
  },
  {
    input: 'index.js',
    plugins: [nodeResolve(), json()],
    output: {
      extend: true,
      banner: `// ${meta.homepage} v${
        meta.version
      } Copyright ${new Date().getFullYear()} ${meta.author}`,
      file: 'dist/chrt.js',
      format: 'umd',
      indent: false,
      name: 'chrt'
    }
  },
  {
    input: 'index.js',
    plugins: [
      nodeResolve(),
      json(),
      uglify(),
      terser({
        output: {
          preamble: `// ${meta.homepage} v${
            meta.version
          } Copyright ${new Date().getFullYear()} ${meta.author}`
        }
      })
    ],
    output: {
      extend: true,
      file: 'dist/chrt.min.js',
      format: 'umd',
      indent: false,
      name: 'chrt'
    }
  }
];
