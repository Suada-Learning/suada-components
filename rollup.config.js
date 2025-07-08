import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'

// Main bundle
const mainConfig = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-[hash].js',
      sourcemapPathTransform: relativeSourcePath => {
        return `suada-components/${relativeSourcePath.replace(/^\.\.\//, '')}`
      },
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      sourcemap: false,
      sourcemapPathTransform: relativeSourcePath => {
        return `suada-components/${relativeSourcePath.replace(/^\.\.\//, '')}`
      },
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({ modules: true, extract: false, minimize: true }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      outDir: 'dist',
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    image(),
  ],
  external: ['react', 'react-dom'],
}

// Components bundle
const componentsConfig = {
  input: 'src/components/index.ts',
  output: [
    {
      dir: 'dist/components',
      format: 'cjs',
      entryFileNames: 'index.js',
      chunkFileNames: '[name]-[hash].js',
      sourcemap: false,
      sourcemapPathTransform: relativeSourcePath => {
        return `suada-components/${relativeSourcePath.replace(/^\.\.\//, '')}`
      },
    },
    {
      dir: 'dist/components',
      format: 'esm',
      entryFileNames: 'index.esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      sourcemap: false,
      sourcemapPathTransform: relativeSourcePath => {
        return `suada-components/${relativeSourcePath.replace(/^\.\.\//, '')}`
      },
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({ modules: true, extract: false, minimize: true }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/components',
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      outDir: 'dist/components',
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    image(),
  ],
  external: ['react', 'react-dom'],
}

// Icons bundle
const iconsConfig = {
  input: 'src/icons/index.ts',
  output: [
    {
      dir: 'dist/icons',
      format: 'cjs',
      entryFileNames: 'index.js',
      chunkFileNames: '[name]-[hash].js',
      sourcemap: false,
      sourcemapPathTransform: relativeSourcePath => {
        return `suada-components/${relativeSourcePath.replace(/^\.\.\//, '')}`
      },
    },
    {
      dir: 'dist/icons',
      format: 'esm',
      entryFileNames: 'index.esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      sourcemap: false,
      sourcemapPathTransform: relativeSourcePath => {
        return `suada-components/${relativeSourcePath.replace(/^\.\.\//, '')}`
      },
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({ modules: true, extract: false, minimize: true }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/icons',
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      outDir: 'dist/icons',
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    image(),
  ],
  external: ['react', 'react-dom'],
}

export default [mainConfig, componentsConfig, iconsConfig]
