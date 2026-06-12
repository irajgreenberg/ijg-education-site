# ij8 Pilots Site (formerly IJG Education)

Standalone static microsite for institutional pilots, grants, and partnerships
around the ij8 platform. The who-pays page of the ij8 site family:
vision (why) · tooling (what) · classroom (how) · **pilots (who pays)**.

## Run locally

```
python3 -m http.server 4321
```

Then open http://127.0.0.1:4321

## Deploy

Self-hosted on the `gogo` server, fronted by Cloudflare Tunnel. CI/CD via
GitHub Actions with a self-hosted runner on the same box.

- Push to `staging` -> https://education-staging.ijglabs.ai (port 4322)
- Merge `staging` -> `main` (PR) -> https://education.ijglabs.ai (port 4321)

Public hostname is moving to `pilots.ij8.ai` (Cloudflare hostname change by
Ira; `education.ijglabs.ai` will redirect). The hostname appears in exactly
two places: the colophon in `index.html` and this README.

Workflow: edit on `staging`, push, review at staging URL, PR to `main` when ready.

How it works: `.github/workflows/deploy.yml` runs on the `self-hosted, gogo`
runner. On push, it does `git fetch + reset --hard` in the matching checkout
on the server (`/home/ira/apps/ijg-education-site` for `main`,
`/home/ira/apps/ijg-education-site-staging` for `staging`), then health-checks
the local http.server.

## Notes

- Pure static HTML/CSS/JS (no build step)
- Fully self-contained: self-hosted InterVariable font, local images
  (`images/`, `education-proof/`) and video (`videos/`) — no external
  resource loads, no trackers (family convention with vision/tooling/classroom)
- Artwork sourced from the ij8 studio archive (`_1200w` renders, re-encoded
  as web JPEGs); the studio image API is auth-gated so remote hotlinks 401
- All factual/policy citations verified June 12, 2026 (EO 14277, USED Dear
  Colleague July 2025, PNAS 2025 guardrails study, Sci Reports 2025 AI-tutor
  RCT, UNESCO 2024, TeachAI/CSTA)
