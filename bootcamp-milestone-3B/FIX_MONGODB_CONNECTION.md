# Fix MongoDB Connection Issue

## Problem
You're seeing "No blogs found" and "No projects found" because your IP address is not whitelisted in MongoDB Atlas.

## Solution: Whitelist Your IP Address

### Step 1: Go to MongoDB Atlas
1. Open your browser and go to: https://cloud.mongodb.com/
2. Log in to your account
3. Select your cluster (Cluster0)

### Step 2: Network Access
1. Click on **"Network Access"** in the left sidebar (under Security)
2. Click the **"Add IP Address"** button (green button)

### Step 3: Add Your IP
You have two options:

**Option A: Add Your Current IP (Recommended)**
1. Click **"Add Current IP Address"** button
2. This will automatically detect and add your current IP
3. Click **"Confirm"**

**Option B: Allow All IPs (For Development Only)**
1. Click **"Allow Access from Anywhere"**
2. This will add `0.0.0.0/0` (allows all IPs)
3. Click **"Confirm"**

⚠️ **Warning**: Option B is less secure but convenient for development. For production, use Option A.

### Step 4: Wait
- Wait 1-2 minutes for the changes to take effect
- MongoDB Atlas needs to update its network rules

### Step 5: Test
1. Refresh your browser at `http://localhost:3000/blog`
2. The blogs should now load!

## Verify Your Connection String

Make sure your `.env.local` file has the correct connection string:
```
MONGO_URI=mongodb+srv://joshuapanicker_db_user:Av1%40l%40ndB%40c0n@cluster0.z6a0bbv.mongodb.net/test?retryWrites=true&w=majority
```

## Still Having Issues?

1. **Check your connection string** - Make sure the password is URL-encoded (special characters like `@` should be `%40`)
2. **Check your database name** - Make sure you're using the correct database (currently `test`)
3. **Check your collections** - Make sure you have `blogs` and `projects` collections in your `test` database
4. **Check the server logs** - Look at the terminal where `npm run dev` is running for error messages

## Quick Test

After whitelisting your IP, you can test the connection by running:
```bash
curl http://localhost:3000/api/blogs/my-portfolio-building-journey
```

If it returns JSON data, your connection is working!

