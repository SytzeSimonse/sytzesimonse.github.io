# Personal Website - Sytze Simonse

A modern, bilingual personal portfolio website showcasing geodata expertise and journalism work.

## Features

- **Bilingual Support**: Full Dutch (NL) and English (EN) translations
- **Article System**: Markdown-based articles with frontmatter metadata
- **Responsive Design**: Mobile-first, fully responsive layout
- **Dark Theme**: Professional dark design with teal and gold accents
- **React Router**: Client-side routing for article detail pages
- **TypeScript**: Fully typed for better development experience
- **GitHub Pages**: Automated deployment via GitHub Actions

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **react-markdown** - Markdown rendering
- **gray-matter** - YAML frontmatter parsing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section with profile photo
│   ├── Bio.tsx        # Biography section
│   ├── Articles.tsx   # Article grid
│   ├── ArticleCard.tsx       # Article preview card
│   ├── ArticleDetail.tsx     # Full article page
│   └── Footer.tsx     # Footer with contact info
├── data/             # Data layer
│   └── articles.ts   # Article loading and parsing
├── types/            # TypeScript types
│   └── article.ts    # Article interfaces
├── utils/            # Utility functions
│   └── date.ts       # Date formatting
├── App.tsx          # Main app with routing
└── main.tsx         # Entry point

public/
├── images/          # Static images
│   ├── profile_photo_Sytze.jpg
│   └── png/
│       └── casuario_logo.png
└── writings/        # Article markdown files
    ├── de_computerkruimeldief.md
    └── weg_van_water.md
```

## Adding New Articles

1. Create a markdown file in `public/writings/`:

```markdown
---
title: "Article Title"
date: "2025-01-15"
language: "nl"
excerpt: "Brief description for the homepage."
---

# Article Title

Your content here...
```

2. Register it in `src/data/articles.ts`:

```typescript
const articleFiles = {
  'your_article_slug': {
    content: null as string | null,
    path: '/writings/your-article.md'
  }
};
```

3. Commit and push - deployment is automatic!

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## License

© 2025 Sytze Simonse. All rights reserved.

## Contact

- **Email**: sytze.simonse@proton.me
- **Business**: sytze@casuario.nl
- **LinkedIn**: [linkedin.com/in/sytze-simonse](https://linkedin.com/in/sytze-simonse)
- **GIS StackExchange**: [gis.stackexchange.com/users/147844/sytze](https://gis.stackexchange.com/users/147844/sytze)
