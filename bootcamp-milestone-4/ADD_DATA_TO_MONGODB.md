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
  "description": "From gaming and building my first PC to learning Python with my dad, dual enrollment in Java, C++, and Python, and now leading projects in Codebox and Hack4Impact—here’s how I found my path in computer science.",
  "content": "<p>My interest in computer science started with gaming and tinkering. I was always into gaming, and I built my first PC with spare parts. My dad noticed my interest and taught me basic Python in middle school so we could build an asteroid collision game simulation together. I truly enjoyed that experience and wanted to pursue computer science more in high school.</p><h2>High School and Dual Enrollment</h2><p>I applied for AP Computer Science A in my junior year, but it was a lottery system and I didn’t get the course. I didn’t let that stop me—I took dual enrollment classes in Java, C++, and Python, all of which I found intriguing. That’s when I knew I had a real interest and decided to major in it.</p><h2>Projects and Teaching</h2><p>I started working on my own projects, like building a hangman game for my brother and a chess simulator, among others. I also discovered I liked to teach: I’ve taught young kids how to code in Python and even Scratch.</p><h2>College and Clubs</h2><p>Coming into college, I learned data structures and fundamental programming and computer science concepts. I joined clubs like Codebox and Hack4Impact, where I took on developer and tech lead roles and worked on long-term development projects that I was passionate about.</p>",
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

## Updating an Existing Blog Post (e.g. "What Brought Me to the Field of Computer Science")

If the post already exists in `blogs`, don’t insert again. In MongoDB Atlas: open the `blogs` collection → find the document with `"slug": "what-brought-me-to-the-field-of-computer-science"` → click **Edit** → replace the `description` and `content` fields with the new text from the JSON above → **Update**. Your site will then show the updated story.

## Remove All Comments from Your Blogs

To clear every comment from your two blog posts:

1. In MongoDB Atlas, go to **Browse Collections** → open the **test** database → open the **blogs** collection.
2. Click the **Edit** (pencil) icon on the **first** blog document.
3. Find the **comments** field. Replace its value with an empty array: `[]`
4. Click **Update**.
5. Repeat for the **second** blog document (edit → set **comments** to `[]` → Update).

After this, your blog pages will show no comments. New comments are only emailed to you for moderation and are not stored until you add an approval flow.

## Important Notes:

- Make sure the `date` field uses the Date format: `{"$date": "2025-10-11T00:00:00.000Z"}`
- The `comments` array should start empty: `[]`
- The `tech_stack` should be an array: `["WordPress", "Web Design"]`
- Image paths should start with `/` (e.g., `/websiteprojectpreview.PNG`)

