# IJG Education Site

Standalone static microsite for Ira Greenberg's creative coding / AI education vision.

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

Workflow: edit on `staging`, push, review at staging URL, PR to `main` when ready.

How it works: `.github/workflows/deploy.yml` runs on the `self-hosted, gogo`
runner. On push, it does `git fetch + reset --hard` in the matching checkout
on the server (`/home/ira/apps/ijg-education-site` for `main`,
`/home/ira/apps/ijg-education-site-staging` for `staging`), then health-checks
the local http.server.

## Notes

- Pure static HTML/CSS/JS (no build step)
- Uses live artwork hosted on ijglabs.ai / gallery.ijglabs.ai
- Does not depend on the main ijglabs app
