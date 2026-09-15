# sdk-template-1

A Next.js portfolio template powered by [Hirely](https://hirely.cc).  
Pulls your entire portfolio — profile, projects, work, education, skills, certificates, testimonials, and more — from the Hirely API and renders it as a fast, SEO-friendly, statically generated site.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mahmovdsayed/sdk-template-1)

---

## What it is

This is a **template**. Clone it, connect your Hirely API key, and you have a personal portfolio site running in minutes.

It uses:

- **Next.js 16** (App Router, Server Components)
- **`@hirely/sdk`** for typed, cached data fetching
- **Tailwind CSS 4** for styling
- **Bun** as the package manager

Everything is server-rendered and cached. The first request fetches your data from Hirely, and every page after that serves from cache — no database, no backend, no admin panel to maintain.

---

## Quick start

### 1. Clone the repo

```bash
git clone https://github.com/Mahmovdsayed/sdk-template-1.git
cd sdk-template-1
````

### 2. Install dependencies

```bash
bun install
```

### 3. Add your Hirely API key

Create a `.env.local` file in the root:

```env
HIRELY_API_KEY=hk_pub_xxxxxxxxxxxxxxxxxxxxxxxxx
```

Get your key from [hirely.cc/dashboard/settings/api-keys](https://hirely.cc/dashboard/settings/api-keys).

It starts with `hk_pub_` and is read-only — scoped to your own portfolio, safe to use server-side.

### 4. Run the dev server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000). You should see your portfolio.

---

## Project structure

```text
app/
  page.tsx              → Home page (fetches portfolio, renders sections)
  layout.tsx            → Root layout
  loading.tsx           → Loading state
  robots.ts             → Dynamic robots.txt
  sitemap.ts            → Dynamic sitemap.xml
  globals.css           → Global styles

components/
  sections/             → Page sections
    certification/      → Certificates
    contact/            → Social links
    edu/                → Education
    faq/                → FAQ accordion
    footer/             → Footer
    header/             → Header + live clock
    info/               → About / Info
    project/            → Projects
    skills/             → Skills
    works/              → Work experience
  ui/
    SectionLayout.tsx   → Shared layout wrapper
    accordion.tsx       → Accordion (for FAQ)

constant/
  constant.ts           → Site URL and constants

lib/
  hirely.ts             → SDK client setup

public/
  → Static assets (SVG, favicon, etc.)
```

---

## How the data flows

```text
Hirely API
    ↓
@hirely/sdk (lib/hirely.ts)
    ↓
app/page.tsx (Server Component)
    ↓
components/sections/*
    ↓
Your browser
```

The SDK is instantiated once in `lib/hirely.ts`:

```ts
import Hirely from "@hirely/sdk";

const apiKey = process.env.HIRELY_API_KEY!;

export const hirely = new Hirely({
  apiKey,
  cache: { enabled: true, ttl: 900 },
});
```

Then in `app/page.tsx`, the portfolio is fetched server-side:

```ts
const {
  profile,
  work,
  education,
  certificates,
  skills,
  projects,
  faq,
  contact,
} = await hirely.get();
```

Every section component receives its data as props — no client-side fetching, no loading spinners on the client, no waterfalls.

---

## What's included

* **Server-rendered everything** — fast first paint, great Core Web Vitals
* **Dynamic SEO metadata** — `generateMetadata` builds title, description, OpenGraph, and Twitter cards from your actual profile data
* **JSON-LD structured data** — `schema.org/Person` markup for rich search results
* **Dynamic sitemap** — auto-generated at `/sitemap.xml`
* **Dynamic robots.txt** — configured at `/robots.txt`
* **Caching** — SDK-level cache with a 15-minute TTL (configurable in `lib/hirely.ts`)
* **TypeScript strict** — full type safety end to end
* **Tailwind CSS 4** — utility-first styling

---

## Customization

### Change the cache TTL

In `lib/hirely.ts`:

```ts
cache: { enabled: true, ttl: 900 } // seconds
```

### Change the site URL

In `constant/constant.ts`:

```ts
export const SITE_URL = "https://your-domain.com";
```

### Reorder or hide sections

Edit `app/page.tsx`. Each section is an independent component — remove the import and the JSX, and it's gone.

### Add a new section

Create a new component under `components/sections/`, import it in `app/page.tsx`, and pass the relevant data from `hirely.get()`.

---

## Deployment

### Vercel (recommended)

Click the deploy button above, or:

```bash
bunx vercel
```

Add `HIRELY_API_KEY` to your Vercel environment variables.

### Anywhere else

This is a standard Next.js app. Build and run:

```bash
bun run build
bun run start
```

Works on any platform that runs Node.js 20+.

---

## Environment variables

| Variable         | Required | Description                               |
| ---------------- | -------- | ----------------------------------------- |
| `HIRELY_API_KEY` | Yes      | Your Hirely public API key (`hk_pub_...`) |

---

## Related

* [`@hirely/sdk` on npm](https://www.npmjs.com/package/@hirely/sdk) — the SDK this template uses
* [Hirely](https://hirely.cc) — the platform behind it
* [Next.js docs](https://nextjs.org/docs) — framework reference

---

## License

MIT