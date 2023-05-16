# Jericho Guanga — Portfolio 🦀

Personal portfolio: cybersecurity × Stardew Valley pixel vibes.
Pure static site — no build step, no dependencies.

## Run locally

```bash
npx serve .
# or just open index.html in a browser
```

## Deploy

**GitHub Pages** (free):
1. Push this folder to a repo (e.g. `newtonsuu/portfolio`).
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)`.
3. Live at `https://newtonsuu.github.io/portfolio/`.

**Vercel** (like Smart Recall): `vercel deploy` from this folder, or import the repo at vercel.com — framework preset "Other", no build command, output dir `.`.

## Structure

| File | What it does |
|---|---|
| `index.html` | all content/sections |
| `styles.css` | theme, transitions, crab + terminal styling |
| `script.js` | Snips the crab (pixel-map SVG), interactive terminal, particles, scroll reveals |
| `assets/` | résumé PDF |

## Fun stuff to try

- Type `help` in the hero terminal (`ctf`, `sudo rm -rf /`, `cat flag.txt`, `stardew`…)
- Click Snips the crab. Click him seven times.

## Editing cheatsheet

- **Crab colors/shape** → `CRAB_MAP` + `CRAB_COLORS` in `script.js` (each row is 24 chars).
- **Terminal commands** → `COMMANDS` object in `script.js`.
- **Accent color** → `--accent` in `styles.css` `:root`.
- **New project card** → copy a `<article class="project-card">` block in `index.html`.
