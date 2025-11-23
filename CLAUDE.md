# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working with the sytzesimonse.nl personal portfolio website.

## Project Overview

**Type**: Personal Portfolio Website
**Owner**: Sytze Simonse (Data Analyst & Geo-information Scientist)
**Domain**: https://sytzesimonse.nl
**Hosting**: GitHub Pages
**Repository**: GitHub Pages repository (username: SytzeSimonse)

This is a modern, bilingual (Dutch/English) React-based Single Page Application showcasing professional work in geodata analysis and journalism. The site was recently migrated from traditional HTML/CSS to a React + TypeScript stack.

## Technology Stack

### Core Framework
- **React 18.3.1** - UI framework with hooks
- **TypeScript 5.7.3** - Strict type checking enabled
- **Vite 7.2.2** - Ultra-fast build tool and dev server
- **React Router DOM 6.22.0** - Client-side routing

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Dark theme** - Professional dark design with teal (#4a7c7e) and gold (#c9a875) accents

### Content Management
- **react-markdown 9.0.1** - Markdown rendering with custom components
- **gray-matter 4.0.3** - YAML frontmatter parsing
- **remark-gfm 4.0.0** - GitHub Flavored Markdown support
- **rehype-raw 7.0.0** - Raw HTML support in markdown
- **rehype-sanitize 6.0.0** - HTML sanitization for security

### UI Components
- **Radix UI** - Accessible component primitives (50+ pre-built components from shadcn/ui)
- **Lucide React 0.487.0** - Icon library
- **class-variance-authority** - Component variant styling
- **tailwind-merge** - Utility class merging

### Special Dependencies
- **buffer 6.0.3** - Polyfill for gray-matter browser compatibility (Node.js Buffer API)

## Directory Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD pipeline
│
├── public/                         # Static assets (copied to dist)
│   ├── images/
│   │   ├── profile_photo_Sytze.jpg
│   │   └── png/
│   │       └── casuario_logo.png
│   ├── writings/                   # Article markdown files
│   │   ├── de_computerkruimeldief.md
│   │   └── weg_van_water.md
│   └── CNAME                       # Custom domain configuration
│
├── src/
│   ├── components/                 # React components
│   │   ├── ui/                     # 50+ pre-built UI components (shadcn/ui)
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── Header.tsx              # Navigation + language toggle
│   │   ├── Hero.tsx                # Welcome section with profile photo
│   │   ├── Bio.tsx                 # Biography section (bilingual)
│   │   ├── Articles.tsx            # Article grid with loading state
│   │   ├── ArticleCard.tsx         # Article preview card
│   │   ├── ArticleDetail.tsx       # Full article page with markdown rendering
│   │   ├── Projects.tsx            # Digital projects section
│   │   ├── ProjectCard.tsx         # Project card component
│   │   └── Footer.tsx              # Contact info + social links
│   │
│   ├── data/
│   │   └── articles.ts             # Article loading & parsing logic
│   │
│   ├── types/
│   │   └── article.ts              # TypeScript interfaces for articles
│   │
│   ├── utils/
│   │   └── date.ts                 # Locale-aware date formatting
│   │
│   ├── App.tsx                     # Main app with React Router setup
│   ├── main.tsx                    # React entry point with Buffer polyfill
│   └── globals.css                 # Global styles + Tailwind imports
│
├── interactive/                    # Legacy interactive game (HTML/JS/CSS)
│   ├── game.js
│   ├── style.css
│   ├── index.html
│   ├── scenes/                     # HTML scene components
│   ├── images/                     # Game assets
│   ├── sounds/                     # Audio files
│   └── svg/                        # SVG assets
│
├── dist/                           # Production build output (generated)
│   ├── index.html
│   ├── assets/                     # Bundled & optimized JS/CSS
│   ├── images/
│   ├── writings/
│   ├── interactive/                # Copied from /interactive
│   └── CNAME
│
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Locked dependency versions
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.node.json              # Build tool TypeScript config
├── vite.config.ts                  # Vite build configuration
├── tailwind.config.js              # Tailwind styling configuration
├── postcss.config.js               # PostCSS plugins
├── index.html                      # HTML entry point
├── README.md                       # Project documentation
├── DEPLOYMENT.md                   # Deployment guide
├── GIT_WORKFLOW.md                 # Git workflow documentation
└── CLAUDE.md                       # This file
```

## Key Configuration Files

### package.json Scripts

```bash
npm run dev              # Start development server (http://localhost:5173)
npm run build            # Production build (TypeScript is NOT checked - faster)
npm run build:check      # Build with TypeScript type checking
npm run preview          # Preview production build locally
npm run lint             # Run ESLint with TypeScript support
```

**IMPORTANT**: The default `npm run build` does NOT run TypeScript type checking for faster builds. Use `npm run build:check` when you need type validation.

### TypeScript Configuration (tsconfig.json)

- **Target**: ES2020
- **Module**: ESNext with bundler resolution
- **Strict mode**: Enabled
- **Unused checks**: noUnusedLocals, noUnusedParameters enabled
- **Path alias**: `@/*` → `./src/*`
- **JSX**: react-jsx (automatic React import)

### Vite Configuration (vite.config.ts)

**Key features:**
- React plugin for Fast Refresh
- Buffer polyfill for gray-matter
- Path alias: `@/*` → `./src/*`
- Manual code-splitting for optimal loading:
  - `react-vendor`: React, ReactDOM, React Router (~130KB)
  - `markdown-vendor`: Markdown processing libraries (~80KB)
- Base path: `/` (GitHub Pages root)
- Markdown files importable as raw text

**Build process:**
1. TypeScript compilation (if using build:check)
2. Bundle optimization with Rollup
3. CSS minification with PostCSS
4. Asset optimization
5. Output to `dist/`

### Tailwind Configuration

- Dark mode: class-based
- Custom HSL color variables
- Pre-configured component library from shadcn/ui
- Animation utilities included
- Custom radius and border utilities

## Development Workflows

### Local Development

```bash
# 1. Install dependencies (first time or after package.json changes)
npm install

# 2. Start development server
npm run dev
# Opens at http://localhost:5173
# Hot Module Replacement (HMR) enabled

# 3. Make changes and test
# - Server auto-reloads on file changes
# - Check browser console for errors
# - Test both Dutch and English versions

# 4. Build for production (optional - to test build)
npm run build
npm run preview  # Preview at http://localhost:4173
```

### Code Quality Checks

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Fix linting issues
npx eslint . --ext ts,tsx --fix
```

### Git Workflow

**Current branch**: Check with `git branch`
**Main branch**: `master` (not `main` - important!)

```bash
# Basic workflow
git status                          # Check current state
git add .                          # Stage changes
git commit -m "Description"         # Commit with message
git push origin master              # Push to master branch

# Feature branch workflow
git checkout -b feature/your-feature
# Make changes
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
# Create PR on GitHub
```

**Important**: This repository uses `master` as the main branch, not `main`. The GitHub Actions workflow is configured to deploy from `master`.

### Build and Deployment Process

**Automatic Deployment** (GitHub Actions):

1. **Trigger**: Push to `master` branch or manual workflow dispatch
2. **Workflow** (.github/workflows/deploy.yml):
   - Checkout code
   - Setup Node.js v20 with npm cache
   - Install dependencies: `npm ci`
   - Build project: `npm run build`
   - Copy `interactive/` folder to `dist/`
   - Upload artifact to GitHub Pages
   - Deploy to GitHub Pages

3. **Result**: Live at https://sytzesimonse.nl within 2-3 minutes

**Monitoring deployment:**
- Go to GitHub repository → Actions tab
- View "Deploy to GitHub Pages" workflow runs
- Check logs for any errors

## Code Conventions and Patterns

### File Naming

- **Components**: PascalCase (Header.tsx, ArticleDetail.tsx)
- **Data/Utils**: camelCase (articles.ts, date.ts)
- **Types**: camelCase (article.ts)
- **Markdown articles**: snake_case (de_computerkruimeldief.md)

### Component Structure

**Standard component pattern:**

```typescript
import { useState } from 'react';
import type { ComponentProps } from '@/types/component';

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  const [state, setState] = useState<string>('');

  return (
    <div className="container mx-auto px-4">
      {/* Component content */}
    </div>
  );
}
```

**Key patterns:**
- Named exports (not default exports)
- TypeScript interfaces with `Props` suffix
- Functional components with hooks
- Explicit typing for props and state
- Tailwind utility classes for styling

### Styling Conventions

**Tailwind CSS patterns:**
```typescript
// Responsive layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Dark theme colors
<div className="bg-[#1a1a1a] text-gray-100">

// Hover states
<button className="bg-[#4a7c7e] hover:bg-[#5a8c8e] transition-colors">

// Cards
<div className="bg-[#252525] rounded-lg border border-gray-800 p-6">
```

### Language/Internationalization Pattern

**Bilingual content structure:**

```typescript
const text = {
  nl: {
    title: "Dutch Title",
    description: "Nederlandse beschrijving"
  },
  en: {
    title: "English Title",
    description: "English description"
  }
};

// Usage in component
<h1>{text[language].title}</h1>
```

**Language state:**
- Managed in App.tsx
- Passed down through components
- Toggleable via Header component
- Type: `'nl' | 'en'`

## Article Management System

### Article Format

**Location**: `/public/writings/`
**Format**: Markdown with YAML frontmatter

**Required frontmatter:**
```yaml
---
title: "Article Title"
date: "2025-01-15"
language: "nl"
excerpt: "Brief description for homepage (1-2 sentences)."
---
```

**Optional frontmatter:**
```yaml
subtitle: "Article subtitle"
```

### Adding a New Article

**Step 1**: Create markdown file in `/public/writings/`

```bash
touch public/writings/your_article_slug.md
```

**Step 2**: Add content with frontmatter

```markdown
---
title: "Your Article Title"
subtitle: "Optional subtitle"
date: "2025-01-15"
language: "nl"
excerpt: "Brief preview text that appears on the homepage."
---

# Your Article Title

Your article content here...

## Subheading

More content...
```

**Step 3**: Register in `src/data/articles.ts`

```typescript
const articleFiles = {
  'de_computerkruimeldief': {
    content: null as string | null,
    path: '/writings/de_computerkruimeldief.md'
  },
  'weg_van_water': {
    content: null as string | null,
    path: '/writings/weg_van_water.md'
  },
  'your_article_slug': {  // ADD THIS
    content: null as string | null,
    path: '/writings/your_article_slug.md'
  }
};
```

**Step 4**: Commit and push

```bash
git add public/writings/your_article_slug.md src/data/articles.ts
git commit -m "Add new article: Your Article Title"
git push origin master
```

**Step 5**: Verify deployment
- Check GitHub Actions for successful build
- Visit https://sytzesimonse.nl to see the new article

### Article Processing Flow

1. **Loading** (src/data/articles.ts):
   - `loadArticles()` fetches all markdown files
   - `loadArticle(id)` fetches single article
   - `loadArticlesByLanguage(lang)` filters by language

2. **Parsing**:
   - gray-matter extracts YAML frontmatter
   - Content is separated from metadata
   - TypeScript interface ensures type safety

3. **Rendering** (src/components/ArticleDetail.tsx):
   - react-markdown renders markdown content
   - Custom components for styled elements
   - rehype-raw allows HTML in markdown
   - rehype-sanitize prevents XSS attacks

4. **Routing**:
   - URL pattern: `/writings/:id`
   - React Router handles navigation
   - Article loaded dynamically based on URL

## Component Architecture

### Page Components

**App.tsx** - Root component
- React Router setup
- Language state management
- Route definitions: `/` (home) and `/writings/:id` (articles)

**Main page sections (ordered):**
1. Header - Navigation + language toggle (sticky)
2. Hero - Profile photo + name + subtitle
3. Bio - Professional background
4. Articles - Article grid (filtered by language)
5. Projects - Digital projects showcase
6. Footer - Contact info + social links

### Component Responsibilities

| Component | Purpose | State | Props |
|-----------|---------|-------|-------|
| Header | Navigation + lang toggle | None | language, onLanguageChange |
| Hero | Profile photo section | None | language |
| Bio | Professional background | None | language |
| Articles | Article grid + loading | articles, loading, error | language |
| ArticleCard | Article preview card | None | article, language |
| ArticleDetail | Full article page | article, loading, error | language |
| Projects | Projects showcase | None | language |
| ProjectCard | Project card | None | project, language |
| Footer | Contact + social links | None | language |

### Data Flow

```
App.tsx (language state)
  ↓
Header (language toggle)
  ↓
Page Components (receive language prop)
  ↓
Articles.tsx (loads articles by language)
  ↓
ArticleCard (displays article preview)

Separate route:
ArticleDetail (loads single article by ID)
```

## Common AI Assistant Tasks

### 1. Adding a New Article

**What to do:**
1. Create markdown file in `public/writings/`
2. Add proper frontmatter (see Article Management section)
3. Register in `src/data/articles.ts`
4. Test locally with `npm run dev`
5. Commit and push

**Files to modify:**
- `public/writings/new_article.md` (create)
- `src/data/articles.ts` (modify)

### 2. Updating Existing Content

**Bilingual text locations:**
- Header: `src/components/Header.tsx`
- Hero: `src/components/Hero.tsx`
- Bio: `src/components/Bio.tsx`
- Articles: `src/components/Articles.tsx`
- Projects: `src/components/Projects.tsx`
- Footer: `src/components/Footer.tsx`

**Pattern:**
```typescript
const text = {
  nl: { /* Dutch */ },
  en: { /* English */ }
};
```

### 3. Adding a New Component

**Steps:**
1. Create file in `src/components/ComponentName.tsx`
2. Follow component pattern (see Code Conventions)
3. Add bilingual text if needed
4. Import and use in parent component
5. Test both languages

### 4. Styling Changes

**Approach:**
- Use Tailwind utility classes first
- Add custom CSS to `src/globals.css` only if necessary
- Follow existing color palette:
  - Background: `#1a1a1a`
  - Cards: `#252525`
  - Primary accent: `#4a7c7e` (teal)
  - Secondary accent: `#c9a875` (gold)
  - Text: `text-gray-100`, `text-gray-300`

### 5. Type Errors

**Common issues:**
- Missing imports from `@/` path alias
- Incorrect prop types
- Language type should be `'nl' | 'en'` not `string`
- Article type defined in `src/types/article.ts`

**Fix workflow:**
```bash
npx tsc --noEmit  # Check for errors
# Fix errors in code
npm run build:check  # Verify build works
```

### 6. Build Issues

**Common problems:**

1. **Buffer not defined**:
   - Already fixed with polyfill in main.tsx
   - Don't remove Buffer import from main.tsx

2. **Module not found**:
   - Check path aliases use `@/` not relative paths
   - Verify imports match file structure

3. **TypeScript errors on build**:
   - Use `npm run build` (skips type check) for faster builds
   - Use `npm run build:check` to catch type errors

### 7. Routing Issues on GitHub Pages

**Known issue**: Direct navigation to article URLs may 404 on GitHub Pages (SPA routing limitation).

**Current solution**: React Router handles internal navigation correctly.

**If issues persist**, consider:
- Adding 404.html redirect (see GIT_WORKFLOW.md)
- Hash routing (changes URLs to `/#/writings/...`)

## Important Technical Considerations

### 1. Buffer Polyfill (Critical)

**Issue**: gray-matter requires Node.js Buffer API, which doesn't exist in browsers.

**Solution**: Polyfill in `src/main.tsx`:
```typescript
import { Buffer } from 'buffer';
window.Buffer = Buffer;
```

**And** in `vite.config.ts`:
```typescript
resolve: {
  alias: {
    buffer: 'buffer/',
  },
},
define: {
  'global': 'globalThis',
},
```

**DO NOT REMOVE** these configurations or article parsing will break.

### 2. Code Splitting

**Configuration** (vite.config.ts):
- `react-vendor` chunk: React, ReactDOM, React Router
- `markdown-vendor` chunk: Markdown processing libraries

**Benefits**:
- Faster initial page load
- Better caching (vendor code changes less frequently)
- Parallel downloads

**Don't modify** unless you understand Rollup chunk optimization.

### 3. Public Assets

**Important**: Files in `public/` are copied to `dist/` as-is.

**Access pattern:**
```typescript
// ✅ Correct
<img src="/images/profile_photo_Sytze.jpg" />

// ❌ Wrong
<img src="./images/profile_photo_Sytze.jpg" />
<img src="images/profile_photo_Sytze.jpg" />
```

Always use absolute paths starting with `/` for public assets.

### 4. Interactive Folder

**Legacy content**: The `interactive/` folder contains a separate HTML/JS game.

**Build process**: Copied to `dist/` by GitHub Actions workflow.

**Access**: Available at https://sytzesimonse.nl/interactive/

**Don't delete** this folder - it's intentionally preserved.

### 5. GitHub Pages Configuration

**CNAME file**: `public/CNAME` contains `sytzesimonse.nl`
- Copied to `dist/CNAME` during build
- Required for custom domain
- Don't modify unless changing domain

**Base path**: Set to `/` in vite.config.ts
- Works for both GitHub Pages and custom domain
- Don't change unless deploying to subdirectory

### 6. TypeScript Strict Mode

**Enabled checks:**
- noUnusedLocals
- noUnusedParameters
- noFallthroughCasesInSwitch
- All strict mode checks

**Best practices:**
- Remove unused imports
- Type all function parameters
- Use proper TypeScript types (not `any`)
- Leverage path aliases: `@/components/Header` not `../../components/Header`

## Troubleshooting Guide

### Build Failures

**Symptom**: `npm run build` fails

**Diagnosis:**
```bash
# Check TypeScript errors
npx tsc --noEmit

# Check for syntax errors
npm run lint

# Check dependencies
npm install
```

**Common fixes:**
- Missing dependencies: `npm install`
- TypeScript errors: Fix type issues or use `npm run build` (skips check)
- ESLint errors: `npx eslint . --ext ts,tsx --fix`

### Articles Not Loading

**Symptom**: Articles don't appear on homepage or 404 on article page

**Checklist:**
1. ✅ Markdown file exists in `public/writings/`
2. ✅ Frontmatter format is correct (YAML with title, date, language, excerpt)
3. ✅ Article registered in `src/data/articles.ts`
4. ✅ File path matches exactly (case-sensitive)
5. ✅ Language matches (nl/en)

**Debug:**
```bash
# Check file exists
ls -la public/writings/

# Check browser console for fetch errors
# Open DevTools → Console tab

# Test locally
npm run dev
# Navigate to http://localhost:5173
```

### Language Toggle Not Working

**Symptom**: Clicking language toggle doesn't change content

**Check:**
1. Component has `language` prop
2. Component uses language in text object: `text[language]`
3. Parent component passes language down
4. Header component calls `onLanguageChange`

### Styling Issues

**Symptom**: Styles don't apply or look wrong

**Common causes:**
1. Tailwind classes not in safelist
2. Custom CSS conflicts with Tailwind
3. Dark mode not applied (check `dark:` prefix)
4. Responsive classes incorrect (`md:`, `lg:`)

**Debug:**
```bash
# Rebuild Tailwind
npm run build

# Check browser DevTools → Elements → Computed styles
```

### Deployment Issues

**Symptom**: GitHub Actions workflow fails

**Check:**
1. Go to Actions tab on GitHub
2. View latest workflow run
3. Read error logs

**Common issues:**
- Build fails: Fix TypeScript/lint errors locally first
- Permission errors: Check repository settings → Actions permissions
- Node version: Workflow uses Node.js 20 (matches package.json requirement)

## Project Evolution and History

### Recent Changes

1. **Migration to React** - Complete rewrite from HTML/CSS to React + TypeScript
2. **Tailwind CSS** - Modern utility-first styling
3. **Vite** - Faster builds and development experience
4. **GitHub Actions** - Automated deployment on push
5. **Bilingual support** - Full Dutch/English translations
6. **Article system** - Markdown-based content management
7. **Interactive preservation** - Legacy game integrated into build

### Main Branch

**Important**: This repository uses `master` as the main branch, not `main`.

All deployment workflows, documentation, and CI/CD are configured for `master`.

## Contact and Support

**Repository owner**: Sytze Simonse
- Personal: sytze.simonse@proton.me
- Business: sytze@casuario.nl (KVK: 85266256)
- LinkedIn: https://linkedin.com/in/sytze-simonse
- GIS StackExchange: https://gis.stackexchange.com/users/147844/sytze

## Additional Resources

- **README.md** - Project overview and quick start
- **DEPLOYMENT.md** - Detailed deployment instructions
- **GIT_WORKFLOW.md** - Git workflow and replacement guide
- **package.json** - Dependencies and scripts
- **vite.config.ts** - Build configuration
- **GitHub Actions** - .github/workflows/deploy.yml

## AI Assistant Best Practices

### Before Making Changes

1. ✅ Read relevant component files
2. ✅ Understand bilingual content structure
3. ✅ Check existing patterns and conventions
4. ✅ Test locally with `npm run dev`

### When Adding Features

1. ✅ Follow existing component patterns
2. ✅ Maintain bilingual support
3. ✅ Add TypeScript types
4. ✅ Use Tailwind CSS for styling
5. ✅ Test both languages
6. ✅ Commit with descriptive messages

### When Fixing Bugs

1. ✅ Reproduce locally first
2. ✅ Check browser console for errors
3. ✅ Understand root cause before fixing
4. ✅ Test fix in both languages
5. ✅ Verify build succeeds

### Code Quality

1. ✅ No unused imports or variables
2. ✅ Proper TypeScript types (no `any`)
3. ✅ Follow existing naming conventions
4. ✅ Use path aliases (`@/` not relative)
5. ✅ Responsive design (mobile-first)
6. ✅ Accessibility considerations

### Testing Checklist

Before committing:
- [ ] `npm run dev` - Test locally
- [ ] Test Dutch version
- [ ] Test English version
- [ ] Test article loading
- [ ] Test responsive design (resize browser)
- [ ] Check browser console for errors
- [ ] `npm run build` - Verify build succeeds
- [ ] `npm run preview` - Test production build

## Summary

This is a well-architected, production-ready personal portfolio website with:
- Modern React + TypeScript + Vite stack
- Bilingual content management
- Automated CI/CD deployment
- Markdown-based article system
- Professional dark theme design
- Legacy content preservation
- Clean code organization

Follow the conventions in this document for consistent, maintainable contributions to the codebase.
