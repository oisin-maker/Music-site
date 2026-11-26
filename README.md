# Aerial

London music, small rooms. A homepage and a navigable news page, built with [Astro](https://astro.build).

- **Homepage** (`/`): featured story, what we stand for, latest articles, the weekly gig map, the daily quiz, the playlist and The Wire.
- **News** (`/news`): our articles plus headlines pulled in from other outlets, with a side menu to filter by section (`?section=reviews`) or outlet (`?source=NME`).
- **Articles** (`/news/<slug>`): full-width image, side menu that jumps to each section, details rail.
- **RSS** (`/rss.xml`): our own articles.

## Put it online (Netlify, about 10 minutes)

1. Go to [netlify.com](https://www.netlify.com) and sign up with your GitHub account.
2. **Add new site → Import an existing project → GitHub**, then pick this repository.
3. Netlify reads `netlify.toml`, so just press **Deploy**. You'll get a `*.netlify.app` address.
4. Open the deploy log and find the **[The Wire] feed report**. A ✓ means the feed worked; a ✗ means the URL needs fixing in `src/data/feeds.js`.
5. To refresh headlines every hour: in Netlify, **Site configuration → Build & deploy → Build hooks → Add build hook**. Copy the URL, then in GitHub go to **Settings → Secrets and variables → Actions → New repository secret**, name it `DEPLOY_HOOK_URL` and paste it. The workflow in `.github/workflows/refresh-feeds.yml` does the rest.
6. When you have a domain, add it under **Domain management**, and set an environment variable `SITE_URL` to it (e.g. `https://yourname.com`).

Vercel works too: import the repo, keep the defaults (it detects Astro), and use a Vercel Deploy Hook for step 5.

## Everyday editing

| To change | Edit |
|---|---|
| Write an article | Add a Markdown file to `src/content/news/` (copy an existing one). Use `section:` news, reviews, interviews or thought. Delete the samples marked `sample: true` when ready. |
| Outlets on The Wire | `src/data/feeds.js` |
| This week's gig map | `gigs` in `src/data/home.js` (`x`/`y` are % positions on the map) |
| Today's quiz | `quiz` in `src/data/home.js` |
| Playlist embed | `playlist.embedUrl` in `src/data/home.js` |
| Menu links | `src/data/nav.js` |
| Colours, fonts | `src/styles/global.css` |
| Article images | Put files in `public/images/` and add `image: /images/your-file.jpg` to the article |

You can edit files directly on github.com: every saved change redeploys the site automatically.

## Run it on your computer

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # production build into dist/
```

## Notes

- The Wire shows headlines, dates and short excerpts only, always linking back to the original outlet.
- If every feed fails during a build, the site shows a saved set of headlines and says so.
- Gig map listings, the playlist and articles marked `sample: true` are placeholders.
- Newsletter sign-ups go to a Google Sheet (see below). When you pick a sending tool (Buttondown, Mailchimp, Ghost etc.), import the sheet and name the tool in `src/pages/privacy.astro`.

## Newsletter sign-ups → Google Sheet (about 10 minutes)

The footer form sends emails to `/api/subscribe` (`netlify/functions/subscribe.mjs`), which passes them to a small Google Apps Script that adds a row to your sheet. Until the two settings in step 5 exist, the form tells people sign-ups aren't working and stores nothing.

1. Create a new Google Sheet (e.g. "Aerial subscribers").
2. In the sheet, open **Extensions → Apps Script**. Delete what's there and paste in everything from `google-apps-script/newsletter.gs`.
3. Change `SECRET` near the top to a long random password (30+ characters of letters and numbers), then save.
4. Click **Deploy → New deployment**, choose type **Web app**, set **Execute as: Me** and **Who has access: Anyone**, then **Deploy**. Approve the permissions Google asks for (it may warn the app is unverified: click **Advanced → Go to … (unsafe)**; it's your own script). Copy the **Web app URL** (it ends in `/exec`).
5. In Netlify, go to **Site configuration → Environment variables** and add:
   - `NEWSLETTER_SCRIPT_URL`: the Web app URL from step 4
   - `NEWSLETTER_SECRET`: the same password you put in `SECRET`
6. Redeploy (**Deploys → Trigger deploy**), then sign up on the live site. A **Subscribers** tab appears in the sheet with your email.

If you edit the script later, use **Deploy → Manage deployments → edit (pencil) → Version: New version** so the URL stays the same. Duplicate emails aren't added twice. If sign-ups fail, check **Logs → Functions → subscribe** in Netlify.
