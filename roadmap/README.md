# Mission Control Roadmap

A self-contained personal execution dashboard for July 20 through October 31, 2026.

## Features

- Overall completion percentage, task count, circular indicator, and semantic progress bars
- Date-aware highlighting for the active roadmap phase
- Weekly and multi-week execution phases with responsive phase navigation
- Task search and All, Incomplete, and Completed filters
- Next Action controls that reveal, scroll to, and keyboard-focus the next incomplete task
- Session-only task progress using `sessionStorage`
- Clear filtered, searched, and all-complete empty states
- Keyboard shortcuts: `/` focuses search, `N` focuses the next action, and `Escape` clears search
- Semantic HTML, visible focus states, reduced-motion support, and responsive layouts
- Public-safe copy with no private contact details, credentials, access codes, or sensitive arrangements

## Session storage behavior

Only completed task IDs are saved under `jj-roadmap-session-v3`. Progress survives a refresh in the same browser tab and resets when that tab's browsing session ends. Search and filter choices are intentionally not persisted. If browser storage is unavailable, the dashboard continues in memory until the page closes.

No backend, database, analytics, cookies, or third-party scripts are used.

## Run locally

Serve the repository root so the same `/roadmap/` path is used locally:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/roadmap/
```

## Deployment

The parent repository is already published by GitHub Pages from the `main` branch root. No roadmap-specific workflow or Pages setting is required. Committing this directory to `main` publishes it at:

```text
https://newtonsuu.github.io/Portfolio_v2/roadmap/
```
