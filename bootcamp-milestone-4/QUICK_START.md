# Quick Start Guide - Milestone 4: Interactive Features & Contact Form

## Overview

Milestone 4 adds interactive features using React client components, useState hooks, and a functional Contact Me form with EmailJS integration.

## New Features in Milestone 4

- ✅ **Client Components**: Contact form uses `"use client"` directive
- ✅ **useState Hook**: Form state management with React hooks
- ✅ **Event Handlers**: Form submission and input handling
- ✅ **EmailJS Integration**: Send emails directly from the contact form
- ✅ **Error Handling**: Validation and user feedback
- ✅ **Success/Error Messages**: Visual feedback for form submissions

## Step 1: Set Up MongoDB Atlas (from previous milestones)

If you haven't already set up MongoDB:

1. Go to https://www.mongodb.com/cloud/atlas and sign up/login
2. Create a free cluster (or use existing one)
3. Go to "Database Access" → Create a database user
4. Go to "Network Access" → Add IP Address → Click "Allow Access from Anywhere"
5. Go to "Database" → Click "Connect" → Choose "Connect your application"
6. Copy the connection string

## Step 2: Set Up EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up
2. Create an **Email Service** (Gmail, Outlook, etc.) and note the **Service ID**
3. Create an **Email Template** with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your **Public Key** from Account → General
5. See `EMAILJS_SETUP.md` for detailed instructions

## Step 3: Create .env.local File

In the `bootcamp-milestone-4` folder, create `.env.local`:

```bash
# MongoDB Configuration
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/test?retryWrites=true&w=majority

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important**: Replace all placeholder values with your actual credentials.

## Step 4: Install Dependencies

```bash
cd bootcamp-milestone-4
npm install
```

## Step 5: Start the Development Server

```bash
npm run dev
```

## Step 6: Test the Features

### 1. Contact Form (NEW!)
- Navigate to: http://localhost:3000/contact
- Fill out the form with your name, email, and message
- Click "Submit"
- You should see a success message
- Check your email inbox for the message!

### 2. Blog Page with Comments
- Navigate to: http://localhost:3000/blog
- Click on any blog post
- Scroll to the comments section
- Add a comment (uses client component with useState)

### 3. Portfolio Page
- Navigate to: http://localhost:3000/portfolio
- View your projects from MongoDB

## Key Differences from Previous Milestones

### Milestone 2 (Static)
- Server components only
- Static data from TypeScript files
- No interactivity

### Milestone 3A/3B (Database)
- Server components for data fetching
- MongoDB integration
- Comments feature (client component)

### Milestone 4 (Interactive)
- **Client components** with `"use client"` directive
- **useState** for form state management
- **Event handlers** (onSubmit, onChange)
- **EmailJS** for sending emails
- **Form validation** and error handling
- **Success/error messages** with visual feedback

## Troubleshooting

### Contact Form Issues

- **"EmailJS configuration is missing"**
  - Check that all three `NEXT_PUBLIC_EMAILJS_*` variables are set in `.env.local`
  - Restart the dev server after adding environment variables

- **Email not received**
  - Check spam folder
  - Verify EmailJS service is properly configured
  - Check EmailJS dashboard for errors

- **Form not submitting**
  - Open browser console (F12) to see errors
  - Verify EmailJS credentials are correct
  - Check network tab for failed requests

### MongoDB Issues

- **"No blogs found"**
  - Check `.env.local` has correct `MONGO_URI`
  - Verify MongoDB Atlas Network Access allows your IP
  - Ensure documents exist in the database

## What to Include in Your PR

1. ✅ Screenshot of receiving an email from your contact form
2. ✅ Working contact form with validation
3. ✅ Success/error messages displayed correctly
4. ✅ All previous milestone features still working (blogs, portfolio, comments)

## Next Steps: Deploy to Vercel

After testing locally, you can deploy to Vercel:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

See deployment instructions in the milestone requirements for more details.
