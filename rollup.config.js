import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: {
    index: './src/index.ts',
    icons: './src/icons/index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      entryFileNames: '[name].js', // This ensures 'index.js' and 'icons.js' are generated
    },
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      entryFileNames: '[name].esm.js', // This ensures 'index.esm.js' and 'icons.esm.js' are generated
    },
  ],
  plugins: [
    peerDepsExternal(),

    resolve(),

    commonjs({
      include: /node_modules/,
    }),

    postcss({
      modules: true,
      extract: true,
      minimize: true,
    }),

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
  ],
  external: ['react', 'react-dom'],
}
