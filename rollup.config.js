import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import multiInput from 'rollup-plugin-multi-input'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({ modules: true, extract: true, minimize: true }),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/icons/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src/icons',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({ modules: true, extract: true, minimize: true }),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      multiInput(),
    ],
    external: ['react', 'react-dom'],
  },
]
