# How to Create a New MongoDB Database User

## Step 1: Go to MongoDB Atlas
1. Open your browser and go to: https://cloud.mongodb.com/
2. Log in with your account (joshua.panicker@gmail.com)
3. Select your project (Project 0)

## Step 2: Navigate to Database Access
1. In the left sidebar, click on **"Database Access"** (under Security)
2. You should see a page that says "No database users" or similar

## Step 3: Add New Database User
1. Click the **"Add New Database User"** button (green button, usually at the top right)
2. You'll see a form to create a new user

## Step 4: Configure the User
Fill in the form:

1. **Authentication Method**: Select **"Password"** (default)

2. **Username**: 
   - You can use: `joshuapanicker_db_user` (or any username you prefer)
   - Make it something you'll remember

3. **Password**:
   - Click **"Autogenerate Secure Password"** (recommended) OR
   - Enter your own password (make it strong!)
   - **IMPORTANT**: If you create your own password, write it down or save it somewhere safe!
   - If you autogenerate, **copy the password immediately** - you won't be able to see it again!

4. **Database User Privileges**: 
   - Select **"Read and write to any database"** (for development)
   - OR select **"Read and write to specific database"** and choose `test` database

5. Click **"Add User"** or **"Create User"**

## Step 5: Update Your .env.local File
After creating the user, update your connection string:

1. Go to your project folder: `bootcamp-milestone-3B`
2. Open the `.env.local` file
3. Update the connection string with your new username and password

**Format:**
```
MONGO_URI=mongodb+srv://YOUR_NEW_USERNAME:YOUR_NEW_PASSWORD@cluster0.z6a0bbv.mongodb.net/test?retryWrites=true&w=majority
```

**Important:** If your password has special characters, you need to URL-encode them:
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
If your username is `joshuapanicker_db_user` and password is `MyNew@Pass#123`, the connection string should be:
```
MONGO_URI=mongodb+srv://joshuapanicker_db_user:MyNew%40Pass%23123@cluster0.z6a0bbv.mongodb.net/test?retryWrites=true&w=majority
```

## Step 6: Whitelist Your IP (If Needed)
If you haven't already:
1. Go to **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
4. Click **"Confirm"**
5. Wait 1-2 minutes

## Step 7: Test the Connection
1. Restart your dev server:
   ```bash
   cd bootcamp-milestone-3B
   npm run dev
   ```
2. Go to: `http://localhost:3000/blog`
3. If the blogs load, your new user is working!

## Quick URL Encoding Tool
If you need help encoding your password, you can use:
- https://www.urlencoder.org/
- Or search "URL encoder" in Google

Just paste your password, encode it, and copy the result into your connection string.

## Troubleshooting
- **Connection fails**: 
  - Double-check that you URL-encoded special characters correctly
  - Make sure your IP is whitelisted
  - Verify the username and password are correct
- **"Authentication failed"**: 
  - Check that the username and password match exactly what you created
  - Make sure special characters are URL-encoded
- **"IP not whitelisted"**: 
  - Go to Network Access and add your IP address



