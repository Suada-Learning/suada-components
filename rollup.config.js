import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import multiInput from 'rollup-plugin-multi-input'
import path from 'path'

export default [
  // Main bundle
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
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
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      image(),
    ],
    external: ['react', 'react-dom'],
  },

  // Components bundle - use multiInput to include all components
  {
    input: ['src/components/index.ts'],
    output: [
      {
        dir: 'dist/components',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src/components',
        entryFileNames: '[name].js',
      },
      {
        dir: 'dist/components',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src/components',
        entryFileNames: '[name].esm.js',
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
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      image(),
    ],
    external: ['react', 'react-dom'],
  },

  // Icons bundle
  {
    input: ['src/icons/index.ts'],
    output: [
      {
        dir: 'dist/icons',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src/icons',
        entryFileNames: '[name].js',
      },
      {
        dir: 'dist/icons',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src/icons',
        entryFileNames: '[name].esm.js',
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
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      image(),
    ],
    external: ['react', 'react-dom'],
  },

  // Add separate entry points for direct imports
  {
    input: {
      'components/index': 'src/components/index.ts',
      'icons/index': 'src/icons/index.ts',
    },
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
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
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      image(),
    ],
    external: ['react', 'react-dom'],
  },
]
