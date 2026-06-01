# Greater Hazelwood Community Collaborative Official Website

The official website for the Greater Hazelwood Community Collaborative.
Built so the organization can manage all content themselves through Sanity CMS.

**Live site:** https://ghccpgh.org  
**Studio (CMS):** https://ghccpgh/studio

## Tech stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity (embedded at /studio)
- **Forms:** Formspree
- **Hosting:** Vercel (auto-deploys from main)

## Prerequisites

You'll need:

- **Node.js 20 or higher** ([download](https://nodejs.org))
- **npm** (comes with Node)
- **Git**
- A code editor — we recommend [VS Code](https://code.visualstudio.com)

Check your versions:
```bash
node --version    # should be v20.x or higher
npm --version
git --version
```

## Getting started

1. Clone the repo
   ```bash
   git clone https://github.com/ghccpgh/ghcc-website
   cd ghcc-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then ask the project lead for the actual values to paste in.

4. Run the dev server
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## Project structure

```
src/
├── app/              Next.js pages and routes
├── components/       React components
├── sanity/           Sanity schemas, queries, Studio config
├── lib/              Utility functions
└── types/            TypeScript types
```

See `docs/` for deeper documentation on schemas, deployment, and handoff.

## Working on this project

We use feature branches and pull requests. **Never commit directly to main.**

1. Pull the latest main: `git checkout main && git pull`
2. Create a branch: `git checkout -b feat/your-feature-name`
3. Make changes, commit often
4. Push your branch: `git push -u origin feat/your-feature-name`
5. Open a PR on GitHub
6. Get at least one approval, then merge

**Branch naming:**
- `feat/...` for new features
- `fix/...` for bug fixes
- `chore/...` for setup/config
- `docs/...` for documentation

## Available scripts

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Run production build locally
npm run lint      # Check code style
```

## Need help?

- Project lead: Natnael Tegegne (natnaelbereta@gmail.com)
- Tech questions: open an issue on GitHub
- Sanity Studio access: ask the project lead for an invite