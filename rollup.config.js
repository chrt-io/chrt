import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from '@wwa/rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import { default as meta } from './package.json' assert {
  type: 'json'
};

export default [
  {
    input: 'src/index.js',
    plugins: [
      nodeResolve(),
      json(),
      bundleSize()
    ],
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
      }),
      bundleSize()
    ],
    output: {
      extend: true,
      file: 'dist/chrt.min.js',
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
      bundleSize()
    ],
    output: {
      extend: true,
      banner: `// ${meta.homepage} v${
        meta.version
      } Copyright ${new Date().getFullYear()} ${meta.author}`,
      file: 'dist/chrt.esm.js',
      format: 'esm',
      indent: false,
      name: 'chrt'
    }
  },
];
