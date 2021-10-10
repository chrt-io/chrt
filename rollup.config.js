import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import * as meta from './package.json';

export default [
  // {
  //   input: 'src/index.js',
  //   external: Object.keys(meta.dependencies || {}).filter(key =>
  //     /^chrt-/.test(key)
  //   ),
  //   plugins: [json()],
  //   output: {
  //     file: 'dist/chrt.node.cjs',
  //     format: 'cjs'
  //     // exports: 'named',
  //   }
  // },
  {
    input: 'src/index.js',
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
    input: 'src/index.js',
    plugins: [
      nodeResolve(),
      json(),
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
