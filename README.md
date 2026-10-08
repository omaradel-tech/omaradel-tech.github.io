# Omar Adel — Engineering Portfolio

**Live site:** https://omaradel-tech.github.io

Senior Backend Engineer portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Deployed as a static export to GitHub Pages.

---

## Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Dark mode:** next-themes (default dark)
- **Animations:** framer-motion
- **Deployment:** GitHub Pages via GitHub Actions

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build

```bash
npm run build
```

Outputs to `out/` — the static export ready for deployment.

---

## Type Check

```bash
npm run type-check
```

---

## Deployment — GitHub Pages

### One-time setup

1. Push this repository to `omaradel-tech/omaradel-tech.github.io` on GitHub (repository name must match `<username>.github.io`)
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save

### Automatic deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:
1. Installs dependencies
2. Runs `npm run build`
3. Deploys the `out/` directory to GitHub Pages

The live site updates within ~2 minutes of pushing.

### Manual deploy commands

```bash
# Initialize git (if not already done)
git init
git remote add origin https://github.com/omaradel-tech/omaradel-tech.github.io.git

# First push
git add .
git commit -m "Initial portfolio"
git branch -M main
git push -u origin main
```

---

## Content

All content lives in `src/data/`:

| File | Contents |
|---|---|
| `src/data/projects.ts` | 8 project case studies |
| `src/data/experience.ts` | Career timeline + education |
| `src/data/skills.ts` | Skill categories + engineering domains + practices |

To add or update a project, edit `src/data/projects.ts`. The project detail pages are generated automatically from this data via `generateStaticParams`.

---

## Adding Your CV

Place your CV PDF at:

```
public/cv.pdf
```

The "Download CV" button on the home page and contact page links to `/cv.pdf`.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, engineering snapshot, featured projects |
| `/about` | Bio, education, contact info |
| `/experience` | Career timeline |
| `/projects` | Projects grid with filter and search |
| `/projects/[slug]` | Individual case study pages |
| `/skills` | Technical skills by category |
| `/engineering` | Engineering practices |
| `/contact` | Contact info and links |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── layout/           # Navbar, Footer, ThemeToggle
│   ├── home/             # HeroSection, EngineeringSnapshot, FeaturedProjects
│   ├── projects/         # ProjectCard, ProjectsGrid, ProjectFilter, CaseStudySection
│   ├── experience/       # Timeline
│   ├── skills/           # SkillsGrid
│   ├── engineering/      # PracticeCard
│   └── ui/               # Container, SectionHeading, TechBadge, RevealOnScroll
├── data/                 # All portfolio content
├── hooks/                # useFilteredProjects
├── lib/                  # cn() utility
└── types/                # TypeScript interfaces
```
