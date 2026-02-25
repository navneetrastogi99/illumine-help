# illumine Help Center

Custom homepage for docs.illumine.app — designed to match help.illumine.app portal.

## Run Locally

**Option 1 — Node.js (recommended)**
```bash
npm install
npm run dev
# Open http://localhost:3000
```

**Option 2 — Python (no install needed)**
```bash
python3 -m http.server 3000
# Open http://localhost:3000
```

**Option 3 — VS Code**
Install the "Live Server" extension, right-click `index.html` → Open with Live Server.

---

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts, select "illumine-help-center" as project name
# Add custom domain: docs.illumine.app
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import from GitHub
3. Framework: **Other** (no framework, static HTML)
4. Root directory: `/` (leave default)
5. No build command needed
6. Click Deploy
7. Settings → Domains → add `docs.illumine.app`

---

## DNS Setup

In your DNS provider (Cloudflare, GoDaddy, etc.):

| Record | Name           | Value                  |
|--------|----------------|------------------------|
| CNAME  | docs           | cname.vercel-dns.com   |
| CNAME  | help           | custom.intercom.help   |

- `docs.illumine.app` → this Vercel site (the custom homepage)
- `help.illumine.app` → Intercom (all 220+ articles)

---

## Updating Content

All content is in **`index.html`**. Search for these section comments to find what to edit:

| Section           | Search for                |
|-------------------|---------------------------|
| Hero title        | `hero-title`              |
| Onboarding steps  | `gs-steps`                |
| Collection cards  | `Browse by module`        |
| Training videos   | `vgrid`                   |
| Release notes     | `rel-content-0`           |
| Most viewed       | `pop-list`                |
| Contact options   | `Need help?`              |
| Regional guides   | `Your region`             |

**Adding a new release (monthly, ~2 min):**
1. Add a new nav item before the first `.rel-ni`:
   ```html
   <div class="rel-ni active" onclick="showRel(this,0)">
     <div class="rel-ni-tag">Mar 2025 · Latest</div>
     <div class="rel-ni-title">Your release title here</div>
   </div>
   ```
2. Add a matching `<div id="rel-content-0">` block
3. Increment all existing `rel-content-N` IDs by 1
4. Remove `· Latest` from the previous top item's tag

---

## Design System

Matches `help.illumine.app` exactly:
- **Font**: Montserrat (Google Fonts)
- **Header gradient**: `linear-gradient(to bottom right, #eeccff, #ffffff)`
- **Icon bg**: `rgb(95, 16, 154)` — from Intercom CSS vars
- **Card border**: `rgb(230, 230, 230)`, radius `8px`
- **Onboarding banner**: `linear-gradient(135deg, #5F109A, #9B4DCA)`
