# Quick Start Guide - Viewing Your Database Integration

## Step 1: Set Up MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas and sign up/login
2. Create a free cluster (or use existing one)
3. Go to "Database Access" → Create a database user (remember username/password)
4. Go to "Network Access" → Add IP Address → Click "Allow Access from Anywhere" (for development)
5. Go to "Database" → Click "Connect" on your cluster
6. Choose "Connect your application"
7. Copy the connection string (looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/...`)

## Step 2: Create .env.local File

In the `bootcamp-milestone-3` folder, create a file named `.env.local`:

```bash
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/test?retryWrites=true&w=majority
```

Replace:
- `YOUR_USERNAME` with your MongoDB username
- `YOUR_PASSWORD` with your MongoDB password
- `cluster0.xxxxx` with your actual cluster name

## Step 3: Add Data to MongoDB

### In MongoDB Atlas:

1. Click "Browse Collections"
2. Create database named: `test`
3. Create collection named: `blogs`
4. Click "Insert Document" and add this (click "Insert"):

```json
{
  "title": "My Portfolio-Building Journey",
  "slug": "my-portfolio-building-journey",
  "date": {"$date": "2025-10-11T00:00:00.000Z"},
  "description": "I will be talking about my journey, utilizing CSS, HTML, and Javascript to design my first personal website.",
  "content": "<p>My prior website design experience had only consisted of template design using WordPress to create a website for Santa Clara University (refer to my portfolio for more information). However, I had no prior experience utilizing HTML, CSS, or Javascript to design a website from scratch. The Hack4Impact Starter Pack provided me with the fundamental knowledge required for utilizing CSS and HTML to design a functional website.</p><h2>First Steps</h2><p>I started by learning HTML to design the basic framework of the website, and then moved on to CSS for styling the website. The most challenging part for me was understanding how to make the website interactive and aesthetically pleasing for the end user.</p><h2>Learning the Basics</h2><p>Once I had the basic structure and styling down, I started to learn how to use JavaScript to add interactive elements. Through the Hack4Impact bootcamp, I learned about DOM manipulation and how it could help my website come to life through a more interactive system.</p>",
  "image": "/websiteprojectpreview.PNG",
  "image_alt": "Preview image of website",
  "comments": []
}
```

5. Add another blog document:

```json
{
  "title": "What Brought Me to the Field of Computer Science",
  "slug": "what-brought-me-to-the-field-of-computer-science",
  "date": {"$date": "2025-10-13T00:00:00.000Z"},
  "description": "I will discuss my computer science journey from the beginning, explaining what brought me here and why I continue to pursue this interest",
  "content": "<p>This is my journey into computer science...</p>",
  "image": "/personalgithubpreview.PNG",
  "image_alt": "Preview image of personal github repositories",
  "comments": []
}
```

6. Create collection named: `projects`
7. Add project documents (click "Insert Document" for each):

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

```json
{
  "name": "Uber Virtual Global Hackathon Project",
  "description": "Product design for Uber which helps maximize accessibility for differently abled users. Created innovative solutions to improve transportation accessibility through user-centered design.",
  "image": "/uberprojectpreview.PNG",
  "image_alt": "Uber Hackathon Project Preview",
  "tech_stack": ["Figma", "Canva", "Product Design", "Accessibility"],
  "link": "https://www.youtube.com/watch?v=O6xAWTcFRKA&t=1s"
}
```

```json
{
  "name": "Personal Website",
  "description": "Designed and built a personal website using HTML and CSS. Created a responsive portfolio showcasing my projects, experience, and skills with modern web design principles.",
  "image": "/websiteprojectpreview.PNG",
  "image_alt": "Personal Website Preview",
  "tech_stack": ["HTML", "CSS", "Web Design"],
  "link": "/"
}
```

```json
{
  "name": "Independent Programming Projects",
  "description": "Various independent programming projects demonstrating skills in Java, C++, and Python. Includes data structures implementations, algorithms, and practical applications.",
  "image": "/githubprojectpreview.PNG",
  "image_alt": "Programming Projects Preview",
  "tech_stack": ["Java", "C++", "Python", "Data Structures"],
  "link": "https://github.com/joshuapanicker"
}
```

## Step 4: Start the Development Server

```bash
cd bootcamp-milestone-3
npm run dev
```

## Step 5: View Your Database Integration

### Check These URLs:

1. **Blog List Page** (fetches from MongoDB):
   - Go to: http://localhost:3000/blog
   - You should see your blogs from MongoDB
   - If you see "No blogs found", check your `.env.local` file

2. **Individual Blog Post** (fetches from MongoDB):
   - Click on any blog from the list
   - URL: http://localhost:3000/blog/my-portfolio-building-journey
   - You should see the blog content from MongoDB
   - Scroll down to see the **Comments section** (NEW!)

3. **Portfolio Page** (fetches from MongoDB):
   - Go to: http://localhost:3000/portfolio
   - You should see your projects from MongoDB

4. **Test Comments** (NEW feature!):
   - Go to any blog post
   - Scroll to the comments section
   - Enter your name and a comment
   - Click "Submit Comment"
   - The comment should appear immediately (stored in MongoDB!)

5. **API Endpoints** (verify database connection):
   - Go to: http://localhost:3000/api/blogs/my-portfolio-building-journey
   - You should see JSON data from MongoDB
   - Go to: http://localhost:3000/api/projects
   - You should see JSON array of projects from MongoDB

## How to Verify Database is Working:

### ✅ Success Indicators:
- Blog page shows blogs from MongoDB (not static data)
- Portfolio page shows projects from MongoDB
- Comments can be added and persist
- API endpoints return JSON data
- No "No blogs found" or "No projects found" errors

### ❌ If You See Errors:
- "No blogs found" → Check `.env.local` file exists and has correct `MONGO_URI`
- Connection errors → Check MongoDB Atlas Network Access (allow your IP)
- 404 errors → Make sure you added documents to MongoDB collections
- Date errors → Make sure `date` field in MongoDB is Date type, not string

## Compare Milestone 2 vs Milestone 3:

**Milestone 2** (static data):
- Uses `blogData.ts` file
- No database connection
- No comments feature
- Run: `cd bootcamp-milestone-2 && npm run dev`

**Milestone 3** (MongoDB):
- Fetches from MongoDB database
- Has comments feature
- API endpoints available
- Run: `cd bootcamp-milestone-3 && npm run dev`

