# IJG Education Site

Standalone static microsite for Ira Greenberg's creative coding / AI education vision.

## Run locally

```
python3 -m http.server 4321
```

Then open http://127.0.0.1:4321

## Deploy

Hosted on Cloudflare Pages. CI/CD is automatic.

- Push to `staging` -> deploys to https://education-staging.ijglabs.ai
- Merge `staging` -> `main` (PR) -> deploys to https://education.ijglabs.ai
- Every PR also gets a unique preview URL

Workflow: edit on `staging`, push, review at staging URL, PR to `main` when ready.

## Notes

- Pure static HTML/CSS/JS (no build step)
- Uses live artwork hosted on ijglabs.ai / gallery.ijglabs.ai
- Does not depend on the main ijglabs app
