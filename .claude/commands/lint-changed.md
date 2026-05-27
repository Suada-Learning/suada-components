---
description: Run ESLint on the files changed in the current diff and report results.
---

1. Run `git diff --name-only HEAD` and `git diff --name-only --cached` to find changed files.
2. Filter to `.ts`, `.tsx`, `.js`, `.jsx` files inside `src/`.
3. Run `npx eslint <file1> <file2> ...` on the filtered list (don't run `yarn lint` on the whole repo unless the diff is empty).
4. Report:
   - Each file's pass/fail status
   - The error count and first 5 errors per failing file
   - A one-line summary at the end

If lint reports auto-fixable issues, do NOT run `--fix` automatically. Print the fix command for the user to run.
