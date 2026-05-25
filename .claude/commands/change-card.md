---
description: Print a Change Card (branch + commit + Trello description) for the changes on the current branch or in the current diff.
---

Look at the current uncommitted diff (`git status` + `git diff` for unstaged, `git diff --cached` for staged). If there are no local changes, look at the commits on the current branch that are ahead of the upstream.

Then print **only** a Change Card in the project's required format:

```
Branch:  <type>/<base>.<short-kebab-summary>
Commit:  <type>: <imperative subject, ≤50 chars total (incl. prefix)>
         <body — omit unless WHY is non-obvious; max 1–2 lines>

Trello:  Title — <human readable title>
         Description —
         **What**: <1-line summary>
         **Why**: <reason / linked ticket / motivation>
         **Files touched**: <comma-separated key paths>
         **How to test**: <2–4 bullet steps>
         **Risk / regressions**: <breaking-change flag if API surface changes — this is a published library>
```

Rules:
- `<type>` ∈ `feat | fix | refactor | docs | chore | perf | style | test`
- `<base>` = single letter for the branch this PR will merge into: `d` = dev, `m` = main/master, `s` = staging. **Default to `d.`** unless `$ARGUMENTS` or `git status` makes another base obvious.
- Use lowercase, kebab-case for the branch summary; ≤6 words.
- Commit subject is imperative ("add", "fix", "remove"), lowercase, no trailing period, **≤50 chars total including the `type:` prefix**.
- Default to subject-only — include a body only if the why isn't obvious; 1–2 lines max.
- Flag breaking API-surface changes explicitly in the Trello "Risk / regressions" line — this is a published library consumed by other suada apps.
- Do NOT run `git commit`, `git push`, `git checkout`, `npm publish`, or `yarn version:*`. Just print the card.

If the user passed an argument ($ARGUMENTS), treat it as additional context about WHY the change was made (use it to fill the Trello `**Why**:` line).
