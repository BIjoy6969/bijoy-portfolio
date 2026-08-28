# A Z M Bodruddoza Bijoy — Portfolio

A premium, editorial developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **lucide-react**.

Dark-first, warm-gold accent on cool ink-graphite, fully responsive, accessible (keyboard nav, visible focus, reduced-motion), SEO-ready (metadata, Open Graph, sitemap, robots, JSON-LD), with project case-study pages and a validated, provider-ready contact form.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node.js 18.17+ (Node 20 recommended).

---

## Where everything lives

```
src/
  app/
    layout.tsx              # fonts, SEO metadata, theme (no-flash), JSON-LD
    page.tsx               # home — assembles the sections
    globals.css            # ALL design tokens + component styles
    projects/[slug]/page.tsx  # one template renders every case study
    sitemap.ts / robots.ts
  components/               # Navbar, Hero, About, Skills, Projects, ...
  data/                    # <-- EDIT YOUR CONTENT HERE (no component edits needed)
  lib/utils.ts
public/
  resume.pdf               # your downloadable résumé (already included)
  og.png                   # add a 1200x630 social preview image (optional)
```

**You almost never need to touch the components.** Edit the files in `src/data/`.

---

## Editing your content

| Want to change… | Edit |
| --- | --- |
| Name, role, email, socials, hero text, about blocks | `src/data/profile.ts` |
| Skills & categories | `src/data/skills.ts` |
| Projects & case studies | `src/data/projects.ts` |
| Experience / leadership | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Achievements | `src/data/achievements.ts` |
| Site URL, SEO, GitHub username, accent, contact endpoint | `src/data/site.ts` |

### Add a project
Append an object to the `projects` array in `src/data/projects.ts`. Each needs a unique
`slug` (used for the URL `/projects/<slug>` and the case-study page — generated automatically).
To give it a bespoke abstract visual, add a matching branch in
`src/components/ProjectVisual.tsx`; otherwise it renders without one.

### Add a GitHub or live-demo URL
In `src/data/projects.ts`, set each project's `github` to its exact repo URL, and `demo`
to the deployed URL. Leaving `demo: ""` shows a neutral "Live demo — add URL" placeholder
instead of a broken button. No links are fabricated.

---

## Connect the contact form

The form validates client-side and runs in **demo mode** until you add an endpoint. Pick one:

**Formspree (simplest)** — create a form, then in `src/data/site.ts`:
```ts
contactEndpoint: "https://formspree.io/f/xxxxxxx",
```
That's it — the form POSTs directly.

**EmailJS / Resend** — replace the `fetch` in `src/components/Contact.tsx` (the
`if (site.contactEndpoint)` branch) with the provider's call. For Resend, add a route
handler at `src/app/api/contact/route.ts` and point `contactEndpoint` to `/api/contact`.

A hidden honeypot field silently drops bots.

---

## Theming

- **Accent colour** — change `--accent` in `src/app/globals.css` (`:root`) and the mirror in
  `src/data/site.ts`. Everything else derives from it.
- **Light / dark** — dark is default; the toggle persists to `localStorage` and respects the
  system preference on first visit. Light-mode tokens live under `html[data-theme="light"]`.
- **Fonts** — swapped in `src/app/layout.tsx` (via `next/font/google`). Current pairing:
  Space Grotesk (display), Inter (body), JetBrains Mono (metadata), Instrument Serif (accent).
- **Type/spacing/radius tokens** — all in `globals.css` under `:root`.

---

## Résumé

`public/resume.pdf` is already wired to the "Download résumé" buttons. Replace the file to
update it (keep the name, or change `resumePath` in `src/data/site.ts`).

---

## SEO checklist before deploy

1. Set your real domain in `src/data/site.ts` (`url`).
2. Add `public/og.png` (1200×630) for rich link previews.
3. `sitemap.xml` and `robots.txt` are generated automatically.

---

## Deploy

Works out of the box on **Vercel** (recommended for Next.js): push to GitHub and import.
Also fine on Netlify or any Node host. `npm run build` must pass first.

---

Built in Dhaka. Content is sourced entirely from the résumé — no fabricated experience,
metrics, or links.
