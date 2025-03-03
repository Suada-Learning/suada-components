import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import { readdirSync } from 'fs'
import path from 'path'

const iconsPath = './src/icons'
const iconsFiles = readdirSync(iconsPath)
  .filter(file => file.endsWith('.tsx'))
  .reduce((entries, file) => {
    const name = path.basename(file, '.tsx')
    entries[`icons/${name}`] = path.join(iconsPath, file)
    return entries
  }, {})

export default {
  input: {
    index: './src/index.ts',
    ...iconsFiles,
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      entryFileNames: '[name].js',
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
  ],
  external: ['react', 'react-dom'],
}
