import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';

import terser from './rollup-terser';
import packageJson from './package.json';

// css files needs to be bundled
const altinnFigmaTokensExceptCss = /@altinn\/figma-design-tokens.*(?<!css)$/;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    external: [
      altinnFigmaTokensExceptCss,
      /@react-hookz\/web/,
      /@radix-ui\/react-popover$/,
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),
      svgr({ exportType: 'named' }),
      postcss(),
      terser(),
    ],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/@altinn\/figma-design-tokens/, /\.css$/],
  },
];
