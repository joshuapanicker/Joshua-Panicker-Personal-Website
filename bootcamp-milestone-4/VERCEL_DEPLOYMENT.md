# Vercel Deployment Guide for Milestone 4

## Problem
Your Vercel deployment is currently serving the old HTML files (Milestone 1) instead of your Next.js app (Milestone 4). This is why you're missing:
- Blog comment sections
- Blog preview images
- Interactive contact form
- MongoDB integration
- All React/Next.js features

## Solution: Configure Vercel to Deploy from bootcamp-milestone-4

### Step 1: Update Vercel Project Settings

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project: `joshuapanicker-bootcamp-project-202`
3. Go to **Settings** → **General**
4. Scroll down to **Root Directory**
5. Click **Edit**
6. Set Root Directory to: `bootcamp-milestone-4`
7. Click **Save**

### Step 2: Configure Build Settings

1. Still in **Settings** → **General**
2. Scroll to **Build and Development Settings**
3. Verify:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Build Command**: `npm run build` (or leave default)
   - **Output Directory**: `.next` (or leave default)
   - **Install Command**: `npm install` (or leave default)

### Step 3: Add Environment Variables

1. Go to **Settings** → **Environment Variables**
2. Add these variables (click **Add** for each):

   **MongoDB:**
   ```
   Name: MONGO_URI
   Value: mongodb+srv://joshuapanicker_db_user:nAztbBdyVSwM7ZQf@cluster0.z6a0bbv.mongodb.net/test?retryWrites=true&w=majority
   Environment: Production, Preview, Development (select all)
   ```

   **EmailJS:**
   ```
   Name: NEXT_PUBLIC_EMAILJS_SERVICE_ID
   Value: service_1mn8sdp
   Environment: Production, Preview, Development (select all)
   ```

   ```
   Name: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   Value: template_ap2vnor
   Environment: Production, Preview, Development (select all)
   ```

   ```
   Name: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   Value: uFCRhN9828o__n_wa
   Environment: Production, Preview, Development (select all)
   ```

### Step 4: Redeploy

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger a new deployment

### Step 5: Verify Deployment

After redeployment, your site should have:
- ✅ Next.js routes (no `.html` extensions)
- ✅ Blog pages at `/blog` and `/blog/[slug]`
- ✅ Comment sections on blog posts
- ✅ Blog preview images
- ✅ Interactive contact form
- ✅ Portfolio from MongoDB
- ✅ All React features working

## Expected URLs After Fix

- Home: `https://joshuapanicker-bootcamp-project-202.vercel.app/`
- Blog: `https://joshuapanicker-bootcamp-project-202.vercel.app/blog`
- Blog Post: `https://joshuapanicker-bootcamp-project-202.vercel.app/blog/my-portfolio-building-journey`
- Portfolio: `https://joshuapanicker-bootcamp-project-202.vercel.app/portfolio`
- Contact: `https://joshuapanicker-bootcamp-project-202.vercel.app/contact`

**Note:** No `.html` extensions! These are Next.js routes.

## Troubleshooting

### If build fails:
- Check Vercel build logs
- Ensure `package.json` is in `bootcamp-milestone-4` folder
- Verify all dependencies are listed in `package.json`

### If environment variables don't work:
- Make sure you selected all environments (Production, Preview, Development)
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

### If MongoDB connection fails:
- Verify your IP is whitelisted in MongoDB Atlas
- Check the `MONGO_URI` is correct
- MongoDB Atlas free tier allows connections from anywhere (0.0.0.0/0)

