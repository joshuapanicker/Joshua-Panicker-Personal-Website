# How to Change MongoDB Database Password

## Step 1: Go to MongoDB Atlas
1. Open your browser and go to: https://cloud.mongodb.com/
2. Log in with your account (joshua.panicker@gmail.com)
3. Select your project (Project 0)

## Step 2: Navigate to Database Access
1. In the left sidebar, click on **"Database Access"** (under Security)
2. You'll see a list of database users

## Step 3: Edit Your User
1. Find your database user: `joshuapanicker_db_user`
2. Click the **"Edit"** button (pencil icon) next to that user

## Step 4: Change the Password
1. In the edit dialog, you'll see a section for **"Password"**
2. Click **"Edit Password"** or **"Change Password"**
3. Enter a new password (make it strong!)
4. Click **"Update User"** or **"Save"**

## Step 5: Update Your .env.local File
After changing the password, you need to update your connection string:

1. Go back to your project folder: `bootcamp-milestone-3B`
2. Open the `.env.local` file
3. Update the password in the connection string

**Important:** If your new password has special characters, you need to URL-encode them:
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`
- `%` becomes `%25`
- `&` becomes `%26`
- `+` becomes `%2B`
- `=` becomes `%3D`
- `?` becomes `%3F`
- `/` becomes `%2F`
- ` ` (space) becomes `%20`

### Example:
If your new password is `MyNew@Pass#123`, the connection string should be:
```
MONGO_URI=mongodb+srv://joshuapanicker_db_user:MyNew%40Pass%23123@cluster0.z6a0bbv.mongodb.net/test?retryWrites=true&w=majority
```

## Step 6: Test the Connection
1. Restart your dev server:
   ```bash
   cd bootcamp-milestone-3B
   npm run dev
   ```
2. Go to: `http://localhost:3000/blog`
3. If the blogs load, your new password is working!

## Quick URL Encoding Tool
If you need help encoding your password, you can use:
- https://www.urlencoder.org/
- Or search "URL encoder" in Google

Just paste your password, encode it, and copy the result into your connection string.

## Troubleshooting
- **Connection fails**: Double-check that you URL-encoded special characters correctly
- **Still can't connect**: Make sure you saved the password change in MongoDB Atlas
- **IP whitelist issue**: Make sure your IP is still whitelisted (this shouldn't change when you change the password)



