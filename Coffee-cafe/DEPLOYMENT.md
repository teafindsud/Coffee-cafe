# Deployment Guide — Teafindss

This guide covers deploying Teafindss to Vercel, the recommended platform for this project.

## Prerequisites

- GitHub account with the repository pushed
- Vercel account (free at https://vercel.com)
- Node.js 18+ and npm installed locally

## Option 1: Vercel GitHub Integration (Recommended)

### Step 1: Push Repository to GitHub

```bash
git init
git add .
git commit -m "Initial commit: production-ready Coffee Cafe"
git branch -M main
git remote add origin https://github.com/yourusername/Coffee-cafe.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com/new
2. Select **Import Git Repository**
3. Paste your GitHub repo URL: `https://github.com/yourusername/Coffee-cafe.git`
4. Click **Continue**

### Step 3: Configure Project

- **Project Name**: Leave as default or customize (e.g., "teafindss-coffee")
- **Framework**: Vercel will auto-detect **Vite**
- **Build Command**: Keep as `npm run build`
- **Output Directory**: Should be `dist`
- **Install Command**: Keep as `npm install`

### Step 4: Environment Variables (Optional)

If using API integrations in the future:

1. Go to **Settings** → **Environment Variables**
2. Add variables like:
   - `VITE_API_URL`: Your backend API URL
   - Any other `VITE_*` prefixed variables

Click **Save**.

### Step 5: Deploy

Click the **Deploy** button. Vercel will:
1. Clone your repository
2. Run `npm install`
3. Run `npm run build`
4. Deploy to production

**Your site is live!** You'll get a URL like `https://coffee-cafe-xxx.vercel.app`

---

## Option 2: Vercel CLI (Manual Deployment)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

From your project root:

```bash
vercel
```

Follow the prompts:
- **Project name**: e.g., `coffee-cafe`
- **Framework preset**: Select `Vite`
- **Build command**: Confirm `npm run build`
- **Output directory**: Confirm `dist`

Your site will be deployed and you'll receive a URL.

### Step 3: Production Deployment (Optional)

To deploy to production:

```bash
vercel --prod
```

---

## Option 3: Git-Based Auto-Deployment

After initial deployment via Vercel CLI:

```bash
# Push changes to GitHub
git add .
git commit -m "Update feature"
git push origin main
```

Vercel will automatically redeploy when you push to your connected branch.

---

## Setting Up a Custom Domain

### In Vercel Dashboard

1. Go to your Vercel project
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `teafindss.com`)
4. Follow DNS configuration steps:
   - Add the provided `CNAME` or `A` record to your domain registrar
   - Or use Vercel's nameservers

### Example DNS Setup (Namecheap)

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.21
```

---

## Environment Variables

### Available Variables

These are automatically available in your Vite app (must start with `VITE_`):

```
VITE_API_URL=https://api.example.com
VITE_ENVIRONMENT=production
```

### Accessing in Code

```typescript
// In your React components or TypeScript files
const apiUrl = import.meta.env.VITE_API_URL
const env = import.meta.env.VITE_ENVIRONMENT || 'development'
```

---

## CI/CD with GitHub Actions

The project includes a `.github/workflows/ci-cd.yml` that:
1. Runs on every push to `main` and `develop`
2. Tests the build on Node 18 and 20
3. Runs TypeScript type checking
4. Runs ESLint
5. Optionally deploys to Vercel (requires secrets setup)

### Setup GitHub Actions Deployment

To enable auto-deployment from GitHub Actions:

1. In your GitHub repo: **Settings** → **Secrets and variables** → **Actions**
2. Add these repository secrets:
   - `VERCEL_TOKEN`: Get from https://vercel.com/account/tokens
   - `VERCEL_ORG_ID`: From Vercel project settings
   - `VERCEL_PROJECT_ID`: From Vercel project settings

Now, every push to `main` will automatically deploy to Vercel!

---

## Monitoring & Logs

### View Deployment Logs

In Vercel Dashboard:
1. Select your project
2. Go to **Deployments**
3. Click on a deployment to view build and runtime logs

### Monitor Performance

1. Go to **Analytics** tab
2. View real-time metrics:
   - Page load times
   - Traffic patterns
   - Error rates

---

## Troubleshooting

### Build Fails on Vercel

**Error**: `npm ERR! code ENOENT`

**Solution**: Ensure `package-lock.json` is committed:
```bash
git add package-lock.json
git commit -m "Add lock file"
git push
```

### Environment Variables Not Working

**Error**: Undefined variables in code

**Solution**:
1. Verify variable names start with `VITE_`
2. Redeploy after adding variables (click the redeploy button)
3. Check in Vercel Settings → Environment Variables

### Port Conflicts Locally

**Error**: `Port 5173 already in use`

**Solution**:
```bash
npm run dev -- --port 3000
```

### TypeScript Errors During Build

Ensure all files pass type checking:
```bash
npm run type-check
npm run lint
npm run build
```

---

## Performance Optimization

The project is optimized for production:

✅ **Code Splitting**: Separate chunks for React, Framer Motion, Icons  
✅ **Minification**: Terser + Console statements removed  
✅ **Font Optimization**: Google Fonts preconnected and preloaded  
✅ **Image Optimization**: Consider using Vercel Image Optimization  

### Further Optimization

If needed, add to `vercel.json`:

```json
{
  "images": {
    "domains": ["example.com"],
    "sizes": [320, 640, 1280],
    "formats": ["image/avif", "image/webp"]
  }
}
```

---

## Rollback & Redeployment

### Rollback to Previous Deployment

1. In Vercel Dashboard → **Deployments**
2. Find the previous working deployment
3. Click the **...** menu → **Promote to Production**

### Manual Redeployment

```bash
git push origin main
# Automatically triggers new deployment via GitHub integration
```

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/guide/
- **React Router**: https://reactrouter.com
- **Framer Motion**: https://www.framer.com/motion

---

**Deployed successfully? Share your site with hello@teafindss.com!** ☕
