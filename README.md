> ⚠️ **AI Generated README** — to be revised by the author before final use.

# F1ForHelp.dev — Personal Portfolio

Live at **[f1forhelp.dev](https://f1forhelp.dev)**

Personal portfolio site for Nicholas A. Ball Ulmer — full-stack developer and game developer. Built from scratch as a working demonstration of the same skills it documents.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| UI Library | Material UI v9 + Emotion |
| Content | MDX 3 |
| Routing | React Router DOM 7 (HashRouter) |
| Hosting | GitHub Pages |
| Domain | Cloudflare (f1forhelp.dev) |
| Backend *(planned)* | Java Spring Boot |

---

## Features

- **MDX-powered project pages** — each project is a self-contained `.mdx` file exporting its own metadata and JSX content. No CMS, no database. Adding a new project is a single file drop.
- **Auto-wired routing and navigation** — portfolio categories are defined once in `categories.js` and automatically propagate to sidebar navigation and routes. Zero manual registration.
- **Responsive layout** — mobile drawer navigation, responsive grids, and adaptive typography throughout.
- **Image gallery component** — reusable prev/next carousel used across project detail pages.
- **Resume page** — embedded PDF viewer with open and download actions.
- **LinkedIn banner generator** — functional tool at `/dev/linkedin-banner` that generates a correctly-sized (1584×396) exportable banner.
- **F1 key easter egg** — global keyboard shortcut navigates to the About page.

---

## Project Structure

```
nick-ulmer.github.io/
└── frontend/
    └── src/
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   ├── Gallery.jsx
        │   ├── MdxDocumentPage.jsx
        │   ├── BeliefLayout.jsx
        │   └── portfolio/
        │       ├── PortfolioLayout.jsx
        │       ├── PortfolioCategory.jsx
        │       └── ProjectCard.jsx
        ├── pages/
        │   ├── Home.jsx
        │   ├── About.jsx
        │   ├── Contact.jsx
        │   ├── Resume.jsx
        │   ├── NotFound.jsx
        │   └── dev/
        │       └── LinkedInBanner.jsx
        ├── data/
        │   ├── categories.js        ← single source of truth for portfolio categories
        │   ├── projects.js          ← auto-loads all MDX project files
        │   ├── documentPages.js     ← auto-loads all MDX document pages
        │   ├── contacts.jsx
        │   └── projects/            ← one .mdx file per project
        │       ├── beatkana.mdx
        │       ├── learntodrive.mdx
        │       ├── lucidity.mdx
        │       ├── ovo.mdx
        │       ├── personal-site.mdx
        │       └── tripdata.mdx
        ├── App.jsx
        ├── main.jsx
        └── theme.jsx
```

---

## Content System

Each project is a single `.mdx` file that exports its metadata and renders its own page:

```mdx
export const object = {
    title: 'BeatKana',
    category: 'gamedev',
    tech: ['Unity', 'C#'],
    status: 'prototype',
    description: '...',
    thumbnail: '/images/projects/beatkana/thumbnail.png',
}

// Full JSX page content below
```

`projects.js` auto-discovers all files in `./projects/` via `import.meta.glob` — no manual imports or registration needed when adding new projects.

---

## Adding a New Project

1. Create `src/data/projects/your-project.mdx`
2. Export an `object` with the required fields
3. Write the page content in JSX below it
4. Drop a thumbnail in `public/images/projects/your-project/`

That's it. It appears in the portfolio grid and gets its own routed detail page automatically.

## Adding a New Category

1. Add one entry to `src/data/categories.js`

```js
{ slug: 'newcategory', label: 'New Category' }
```

The sidebar link and route are generated automatically.

---

## Running Locally

```bash
cd frontend
npm install
npm run dev       # dev server at localhost:5173
```

## Deploying

```bash
npm run deploy    # builds and pushes to gh-pages branch
```

---

## Planned

- Java Spring Boot backend (API endpoints, Swagger/OpenAPI docs)
- Live API integration visible on the frontend
- Devlog / changelog
- Additional game dev projects
- Playable in-browser game build
