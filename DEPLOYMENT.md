# Deployment Guide for sytzesimonse.nl

This guide explains how to deploy your personal website to GitHub Pages and replace your current website.

## Prerequisites

- Git installed on your machine
- Node.js (v20 or higher) installed
- GitHub account with access to your repository

## Initial Setup

### 1. Install Dependencies

First, install all required dependencies:

```bash
npm install
```

### 2. Test Locally

Before deploying, test the website locally:

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to preview the site.

### 3. Build for Production

Test the production build:

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

This will create a `dist` folder with your production-ready website.

## Deploying to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

The repository is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch.

#### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/YOUR_REPO`
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Save the settings

#### Step 2: Push Your Code

```bash
# Check your current git status
git status

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: New React-based personal website"

# Push to GitHub
git push origin main
```

#### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see a workflow named "Deploy to GitHub Pages" running
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Method 2: Manual Deployment

If you prefer to deploy manually:

```bash
# Build the site
npm run build

# The dist folder now contains your website
# You can manually upload this to any hosting service
```

## Replacing Your Current Website (sytzesimonse.nl)

### If Your Domain Points to GitHub Pages

#### Option A: Use the Same Repository Name

If your current repository is named `sytzesimonse.nl` or `YOUR_USERNAME.github.io`:

1. **Backup your old website** (if needed):
   ```bash
   # Create a backup branch
   git checkout -b backup-old-website
   git push origin backup-old-website
   ```

2. **Switch back to main branch**:
   ```bash
   git checkout main
   ```

3. **Replace everything with new website**:
   ```bash
   # Remove old files (be careful!)
   git rm -rf .

   # Copy all new files from this directory to your repository
   # Then add them:
   git add .
   git commit -m "Replace website with new React version"
   git push origin main
   ```

#### Option B: Different Repository

If you want to keep the old repository separate:

1. **Update your DNS settings** to point to the new repository
2. Or **rename your repositories**:
   - Rename old repo to `old-website`
   - Rename new repo to match your custom domain setup

### Configuring Custom Domain (sytzesimonse.nl)

1. In your repository, create a file named `CNAME` in the `public` folder:
   ```bash
   echo "sytzesimonse.nl" > public/CNAME
   ```

2. Commit and push:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

3. In GitHub repository settings → Pages:
   - Enter your custom domain: `sytzesimonse.nl`
   - Enable "Enforce HTTPS"

4. Update your DNS records at your domain registrar:
   - For apex domain (sytzesimonse.nl):
     - Add A records pointing to GitHub's IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - For www subdomain (www.sytzesimonse.nl):
     - Add CNAME record pointing to: `YOUR_USERNAME.github.io`

5. Wait for DNS propagation (can take up to 24 hours)

## Git Workflow for Future Updates

### Making Updates

1. **Make your changes** to the code
2. **Test locally**:
   ```bash
   npm run dev
   ```
3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin main
   ```
4. **Automatic deployment** will trigger and update your live site

### Best Practices

- **Always test locally** before pushing
- **Use descriptive commit messages**
- **Make frequent, small commits** rather than large changes
- **Create branches** for major changes:
  ```bash
  git checkout -b feature/new-article
  # Make changes
  git add .
  git commit -m "Add new article about X"
  git push origin feature/new-article
  # Then create a Pull Request on GitHub
  ```

## Adding New Articles

To add a new article to your website:

1. **Create a markdown file** in the `public/writings/` directory:
   ```bash
   touch public/writings/my-new-article.md
   ```

2. **Add frontmatter** at the top of the file:
   ```markdown
   ---
   title: "Your Article Title"
   subtitle: "Optional subtitle"
   date: "2025-01-15"
   language: "nl"
   excerpt: "A brief description that appears on the homepage."
   ---

   # Your Article Title

   Your article content here...
   ```

3. **Register the article** in `src/data/articles.ts`:
   ```typescript
   const articleFiles = {
     'de_computerkruimeldief': { /* ... */ },
     'weg_van_water': { /* ... */ },
     'my_new_article': {  // Add this
       content: null as string | null,
       path: '/writings/my-new-article.md'
     }
   };
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add new article: My Article Title"
   git push origin main
   ```

## Troubleshooting

### Site Not Updating After Push

1. Check the **Actions** tab for errors
2. Ensure GitHub Pages is enabled in Settings
3. Clear your browser cache
4. Wait a few minutes for CDN propagation

### Build Errors

If the build fails:
1. Check the Actions logs for specific errors
2. Test the build locally: `npm run build`
3. Fix any TypeScript or build errors
4. Push the fixes

### Custom Domain Not Working

1. Verify DNS settings are correct
2. Check that CNAME file exists in the repository
3. Wait for DNS propagation (up to 24 hours)
4. Enable "Enforce HTTPS" in GitHub Pages settings

### Articles Not Loading

1. Ensure markdown files are in `public/writings/`
2. Check frontmatter format is correct
3. Verify article is registered in `src/data/articles.ts`
4. Check browser console for errors

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Test locally with `npm run dev`
3. Review the error messages in the browser console
4. Check that all files are properly committed to Git

## Repository Structure

```
personal-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatic deployment config
├── public/
│   ├── images/                 # Your images
│   └── writings/               # Article markdown files
├── src/
│   ├── components/            # React components
│   ├── data/                  # Article data layer
│   ├── types/                 # TypeScript types
│   ├── utils/                 # Utility functions
│   ├── globals.css            # Global styles
│   ├── main.tsx              # App entry point
│   └── App.tsx               # Main app component
├── index.html                 # HTML entry point
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite build config
└── tailwind.config.js        # Tailwind CSS config
```

## Environment

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Markdown**: react-markdown with gray-matter
- **Deployment**: GitHub Pages via GitHub Actions
