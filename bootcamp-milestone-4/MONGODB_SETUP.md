# MongoDB Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (free tier is fine)

## Step 2: Set Up Database

1. Name your database: **test**
2. Create a collection called: **blogs**
3. Create another collection called: **projects**

## Step 3: Get Connection String

1. In Atlas, click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string (it will look like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/...`)
4. Replace `<username>` and `<password>` with your database username and password

## Step 4: Create .env File

1. In the root of `bootcamp-milestone-2`, create a file named `.env.local`
2. Add your connection string:

```bash
MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/test?retryWrites=true&w=majority
```

**Important:** Make sure `.env.local` is in your `.gitignore` (it should already be there).

## Step 5: Add Blog Documents to MongoDB

In the **blogs** collection, add documents with this structure:

```json
{
  "title": "My Portfolio-Building Journey",
  "slug": "my-portfolio-building-journey",
  "date": "2025-10-11T00:00:00.000Z",
  "description": "I will be talking about my journey, utilizing CSS, HTML, and Javascript to design my first personal website.",
  "content": "<p>My prior website design experience had only consisted of template design using WordPress...</p><h2>First Steps</h2><p>...</p>",
  "image": "/websiteprojectpreview.PNG",
  "image_alt": "Preview image of website",
  "comments": []
}
```

**Note:** 
- The `date` field should be a **Date** type (not a string)
- The `content` field can contain HTML
- The `comments` array should start empty

## Step 6: Add Project Documents to MongoDB

In the **projects** collection, add documents with this structure:

```json
{
  "name": "Virtual Tour Host Website",
  "description": "Designed and built a website for Santa Clara University using WordPress. This website hosts the university's virtual tours, providing an interactive platform for prospective students to explore the campus.",
  "image": "/scuprojectpreview.PNG",
  "image_alt": "Virtual Tour Website Preview",
  "tech_stack": ["WordPress", "Web Design", "Virtual Tours"],
  "link": "https://scutours.com/"
}
```

**Note:** The `link` field is optional. If you want an internal link, start it with `/` (e.g., `/` for home page).

## Step 7: Test Your Setup

1. Make sure your dev server is running: `npm run dev`
2. Visit `http://localhost:3000/blog` - you should see your blogs
3. Visit `http://localhost:3000/portfolio` - you should see your projects
4. Click on a blog post and try adding a comment

## Troubleshooting

- **"No blogs found"**: Check that your `.env.local` file has the correct `MONGO_URI` and that you've added documents to the `blogs` collection
- **Connection errors**: Make sure your IP address is whitelisted in MongoDB Atlas (Network Access section)
- **Date format errors**: Make sure the `date` field in MongoDB is set as a Date type, not a string

