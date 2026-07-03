---
description: Run TypeScript typecheck (no emit) and report errors concisely.
---

Run `npx tsc --noEmit --skipLibCheck` from the project root and report:
- Total error count
- Errors grouped by file (path + error count)
- First 10 individual error messages, with `file:line` references in markdown link format

If there are no errors, say so in one line and exit.

Do NOT attempt to fix errors automatically — just report.
