import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import multiInput from 'rollup-plugin-multi-input'

export default [
  {
    input: ['src/index.ts', 'src/icons/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({ include: /node_modules/ }),
      postcss({ modules: true, extract: true, minimize: true }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/types',
        exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx'],
      }),
      multiInput(),
    ],
    external: ['react', 'react-dom'],
  },
]
