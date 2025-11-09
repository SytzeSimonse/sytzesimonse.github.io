# Git Workflow for Replacing Your Current Website

This document explains how to properly replace your current website at sytzesimonse.nl with this new React-based version.

## Current Situation

You have an existing website at sytzesimonse.nl hosted on GitHub Pages. You want to replace it with this new website.

## Recommended Approach: Clean Replacement

This is the safest method to completely replace your old website while keeping a backup.

### Step 1: Initialize Git Repository (if not already done)

```bash
# Initialize git in this directory
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: New React personal website"
```

### Step 2: Backup Your Old Website

**Important:** Before replacing anything, backup your current website.

```bash
# Navigate to your current website repository
cd /path/to/your/current/sytzesimonse.nl

# Create a backup branch
git checkout -b backup-2025
git push origin backup-2025

# Or create a complete backup copy
cd ..
cp -r sytzesimonse.nl sytzesimonse.nl-backup
```

### Step 3: Option A - Replace in Existing Repository

If you want to keep using the same repository (recommended for custom domain):

```bash
# Go to your current website repo
cd /path/to/your/current/sytzesimonse.nl

# Remove all files except .git
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# Copy all files from new website
cp -r /path/to/this/new/website/* .
cp -r /path/to/this/new/website/.* . 2>/dev/null || true

# Check what changed
git status

# Add all new files
git add .

# Commit the replacement
git commit -m "Replace website with new React-based version"

# Push to GitHub
git push origin main
```

### Step 4: Option B - Create New Repository

If you prefer a fresh start with a new repository:

```bash
# In your new website directory
cd /home/sytze/Development/personal-website

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then update your DNS settings to point to the new repository.

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The workflow will automatically trigger

### Step 6: Set Up Custom Domain

If using a custom domain (sytzesimonse.nl):

1. Add a CNAME file (already included in `public/` if you added it):
   ```bash
   echo "sytzesimonse.nl" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

2. In GitHub repository Settings → Pages:
   - Enter custom domain: `sytzesimonse.nl`
   - Check "Enforce HTTPS"

3. Verify DNS settings at your domain registrar:
   - A records for apex domain pointing to GitHub IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME for www pointing to: `YOUR_USERNAME.github.io`

## Verification Steps

After deployment:

1. **Check GitHub Actions**:
   - Go to the Actions tab in your repository
   - Verify "Deploy to GitHub Pages" workflow completed successfully

2. **Test the Website**:
   - Visit your site at `sytzesimonse.nl`
   - Test both Dutch and English versions
   - Click on articles to verify they load
   - Test on mobile devices

3. **Verify HTTPS**:
   - Ensure the site loads with `https://`
   - Check for any mixed content warnings

## Common Issues and Solutions

### Issue: Site Shows Old Content

**Solution**: Clear your browser cache or try in incognito mode. GitHub Pages CDN can take a few minutes to update.

### Issue: 404 on Article Pages

**Solution**: This is a known issue with SPAs on GitHub Pages. You need to add a 404.html that redirects to index.html.

Create `public/404.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    const path = window.location.pathname;
    window.location.replace(window.location.origin + '/#' + path);
  </script>
</head>
<body></body>
</html>
```

Then update your Vite config to use hash routing, or use a custom 404 redirect solution.

**Better Solution**: Add a 404.html redirect and update `vite.config.ts`:

```typescript
// Add this to your vite.config.ts
build: {
  outDir: 'dist',
  rollupOptions: {
    output: {
      manualChunks: undefined
    }
  }
}
```

### Issue: Custom Domain Not Working

**Solution**:
1. Verify CNAME file exists in the repository
2. Check DNS settings are correct
3. Wait up to 24 hours for DNS propagation
4. Ensure "Enforce HTTPS" is enabled in GitHub settings

### Issue: Images Not Loading

**Solution**: Images should be in the `public/` folder. Vite will copy them to the build output. Check that:
- Images are in `public/images/`
- Image paths in code start with `/images/` (not `./images/`)

## Ongoing Maintenance

### Daily Workflow

```bash
# Make changes to your code
# Test locally
npm run dev

# When satisfied, commit and push
git add .
git commit -m "Describe your changes"
git push origin main

# GitHub Actions will automatically deploy
```

### Adding Articles

1. Create markdown file in `public/writings/`
2. Add frontmatter with title, date, language, excerpt
3. Register in `src/data/articles.ts`
4. Commit and push

### Rolling Back Changes

If something goes wrong:

```bash
# View commit history
git log --oneline

# Revert to a previous commit
git revert COMMIT_HASH

# Or reset to a previous state (careful!)
git reset --hard COMMIT_HASH
git push origin main --force
```

## Support Checklist

Before asking for help, check:

- [ ] GitHub Actions workflow completed successfully
- [ ] Local build works: `npm run build && npm run preview`
- [ ] Browser console shows no errors
- [ ] DNS settings are correct (if using custom domain)
- [ ] CNAME file exists in repository (if using custom domain)
- [ ] Waited at least 5 minutes after push for deployment

## Emergency Rollback

If the new site has critical issues:

```bash
# Quick rollback to old website
cd /path/to/your/repo
git checkout backup-2025  # or your backup branch name
git push origin main --force

# This immediately restores your old website
```

## Next Steps

After successful deployment:

1. Test all functionality thoroughly
2. Update any external links pointing to your old site structure
3. Monitor GitHub Actions for any future deployment issues
4. Consider setting up monitoring/analytics
5. Keep your local repository in sync:
   ```bash
   git pull origin main
   ```

## Questions?

Refer to:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [README.md](./README.md) - Project overview
- GitHub Actions logs - For deployment errors
