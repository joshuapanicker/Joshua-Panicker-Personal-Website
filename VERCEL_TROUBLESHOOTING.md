# Vercel Deployment 404 Error - Troubleshooting Guide

## Issue
Getting `404: NOT_FOUND` error when accessing the deployment link.

## Steps to Fix

### Step 1: Check Your Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Look for your project: `joshuapanicker-bootcamp-project-2025` or similar
3. Click on the project

### Step 2: Find the Correct URL

In your project dashboard, you should see:
- **Production Domain** (main URL)
- **Preview Deployments** (for each commit)

The correct URL format should be:
- `https://[project-name].vercel.app`
- Or a custom domain if you set one up

### Step 3: Check Deployment Status

1. Go to the **Deployments** tab
2. Look at the latest deployment
3. Check the status:
   - ✅ **Ready** = Deployment successful
   - ⏳ **Building** = Still deploying
   - ❌ **Error** = Build failed

### Step 4: If No Deployments Exist

If you don't see any deployments:

1. Go to **Settings** → **General**
2. Verify:
   - **Root Directory**: `bootcamp-milestone-4`
   - **Framework Preset**: Next.js
3. Go to **Deployments** tab
4. Click **"Redeploy"** or push a new commit to trigger deployment

### Step 5: Trigger a New Deployment

**Option A: Push a commit**
```bash
cd /Users/joshuapanicker/bootcamp-project-2025
git checkout main
git add .
git commit -m "trigger: redeploy on Vercel"
git push origin main
```

**Option B: Redeploy from Vercel**
1. Go to **Deployments** tab
2. Find a previous successful deployment
3. Click **⋯** (three dots)
4. Click **Redeploy**

### Step 6: Verify Environment Variables

1. Go to **Settings** → **Environment Variables**
2. Ensure these are set:
   - `MONGO_URI`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. Make sure they're enabled for **Production**, **Preview**, and **Development**

### Step 7: Check Build Logs

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **"Build Logs"** or **"View Function Logs"**
4. Look for any errors

## Common Issues

### Issue: "Root Directory not found"
- **Fix**: Set Root Directory to `bootcamp-milestone-4` in Settings → General

### Issue: Build fails
- **Fix**: Check build logs for specific errors (TypeScript, missing dependencies, etc.)

### Issue: Wrong branch
- **Fix**: Ensure Vercel is deploying from `main` branch (or your preferred branch)

### Issue: Environment variables missing
- **Fix**: Add all required environment variables and redeploy

## Next Steps

After fixing the issue:
1. Wait for deployment to complete (usually 1-2 minutes)
2. Copy the correct URL from the Vercel dashboard
3. Test the URL in your browser
4. Update your LinkedIn post with the correct URL

