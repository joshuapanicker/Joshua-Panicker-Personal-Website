# How to Add Data to MongoDB Atlas

## Step 1: Access Your Database

1. Go to https://cloud.mongodb.com
2. Click on your cluster (Cluster0)
3. Click "Browse Collections" button

## Step 2: Create Database and Collections

1. If you don't see a database named `test`, click "Create Database"
   - Database Name: `test`
   - Collection Name: `blogs`
   - Click "Create"

2. Create another collection:
   - Click "Create Collection" 
   - Collection Name: `projects`
   - Click "Create"

## Step 3: Add Blog Documents

1. Click on the `blogs` collection
2. Click "Insert Document"
3. Click "{}" (JSON view) if not already selected
4. Copy and paste this JSON (replace the existing content):

```json
{
  "title": "My Portfolio-Building Journey",
  "slug": "my-portfolio-building-journey",
  "date": {"$date": "2025-10-11T00:00:00.000Z"},
  "description": "I will be talking about my journey, utilizing CSS, HTML, and Javascript to design my first personal website.",
  "content": "<p>My prior website design experience had only consisted of template design using WordPress to create a website for Santa Clara University (refer to my portfolio for more information). However, I had no prior experience utilizing HTML, CSS, or Javascript to design a website from scratch. The Hack4Impact Starter Pack provided me with the fundamental knowledge required for utilizing CSS and HTML to design a functional website.</p><h2>First Steps</h2><p>I started by learning HTML to design the basic framework of the website, and then moved on to CSS for styling the website. The most challenging part for me was understanding how to make the website interactive and aesthetically pleasing for the end user.</p><h2>Learning the Basics</h2><p>Once I had the basic structure and styling down, I started to learn how to use JavaScript to add interactive elements. Through the Hack4Impact bootcamp, I learned about DOM manipulation and how it could help my website come to life through a more interactive system.</p><h2>What I Learned</h2><p>Beyond the experience I gained with utilizing tools such as CSS, HTML, and Javascript, I also learned some more practical skills I could utilize in the future such as being able to design a product from scratch with a tool I had no prior experience with. While there were times where I found parts of the process tedious, I learned to problem solve by doing research and adapting upon the resources I was given to build this website.</p>",
  "image": "/websiteprojectpreview.PNG",
  "image_alt": "Preview image of website",
  "comments": []
}
```

5. Click "Insert"

6. Add a second blog - Click "Insert Document" again and paste:

```json
{
  "title": "What Brought Me to the Field of Computer Science",
  "slug": "what-brought-me-to-the-field-of-computer-science",
  "date": {"$date": "2025-10-13T00:00:00.000Z"},
  "description": "I will discuss my computer science journey from the beginning, explaining what brought me here and why I continue to pursue this interest",
  "content": "<p>This is my journey into computer science. I've always been fascinated by technology and how things work behind the scenes.</p><h2>Early Interest</h2><p>My interest in computer science started at a young age when I first discovered programming.</p><h2>College Journey</h2><p>As a first year computer science major at Cal Poly San Luis Obispo, I'm excited to continue learning and growing in this field.</p>",
  "image": "/personalgithubpreview.PNG",
  "image_alt": "Preview image of personal github repositories",
  "comments": []
}
```

7. Click "Insert"

## Step 4: Add Project Documents

1. Click on the `projects` collection
2. Click "Insert Document"
3. Click "{}" (JSON view)
4. Copy and paste this JSON:

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

5. Click "Insert"

6. Add second project - Click "Insert Document" and paste:

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

7. Click "Insert"

8. Add third project - Click "Insert Document" and paste:

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

9. Click "Insert"

10. Add fourth project - Click "Insert Document" and paste:

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

11. Click "Insert"

## Step 5: Verify Data is Added

After adding all documents, you should see:
- 2 documents in the `blogs` collection
- 4 documents in the `projects` collection

## Step 6: Refresh Your Website

1. Go back to your browser
2. Visit http://localhost:3000/blog - You should now see your blogs!
3. Visit http://localhost:3000/portfolio - You should now see your projects!

## Important Notes:

- Make sure the `date` field uses the Date format: `{"$date": "2025-10-11T00:00:00.000Z"}`
- The `comments` array should start empty: `[]`
- The `tech_stack` should be an array: `["WordPress", "Web Design"]`
- Image paths should start with `/` (e.g., `/websiteprojectpreview.PNG`)

