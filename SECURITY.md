# Security — no-ethical-consumption showcase

Checklist, not prose. Check each box or state why it doesn't apply.

- [x] **No secrets.** Static files only: HTML, JS, a PNG, fonts and licence texts. No keys, tokens, or config.
- [x] **No personal or usage data.** The page shows example numbers only. Nothing here comes from real session logs; the tool that reads them lives in a separate private repo.
- [x] **No third-party requests.** Fonts are self-hosted; the page loads only files from this repo. The upstream repo tests this for the page it generates.
- [x] **No data collection.** No analytics, cookies, forms or storage.
- [x] **CSP-friendly element.** `nec-dino.js` uses no inline styles, no network, no `eval` or `new Function`, and no `innerHTML`. The upstream repo has a test that greps for these.
- [ ] **GitHub Actions use pinned action hashes** — *not applicable*: no workflows. Pages builds from `main` (root) without Actions.
- [ ] **Branch protection** — *explicitly skipped*: PR-only on `main` is kept by discipline, as in the workspace's other repos.
- [x] **Dependabot alerts enabled.** There are no dependencies to watch.

## Updating

The content is copied from no-ethical-consumption's `docs/` at a merged commit (`git archive <sha> docs`), never edited here. A change goes into the upstream repo first, then a PR here names the new source commit in README's "Current content" line.

## Reporting

Something wrong? Open an issue on this repo.
