import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // `docs/` is a committed Storybook build: bundled vendor code with its own
  // inline eslint directives, which is why it used to report rules we never enabled.
  { ignores: ['dist', 'docs', 'coverage'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // eslint-plugin-react-hooks 7 ships the React Compiler rules in its
      // recommended set. Keeping the two classic rules at their previous
      // severities so this upgrade adds no findings; the compiler rules are
      // their own piece of work.
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Add this rule to enforce correct import paths
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['suada-components'],
              message:
                'Import directly from subpaths instead: use "suada-components/components" or "suada-components/icons"',
            },
          ],
        },
      ],
    },
  },

  {
    // Declaration files augment third-party module types. styled.d.ts widens
    // styled-components' DefaultTheme with `[key: string]: any` index
    // signatures on purpose; `unknown` there would be a breaking type change
    // for every consumer that reads a theme key.
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
