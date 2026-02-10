# EmailJS Setup Guide

This guide will help you set up EmailJS for the Contact Me form in Milestone 4.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. In the EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - The sender's name
   - `{{from_email}}` - The sender's email
   - `{{message}}` - The message content

Example template:
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Note down your **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy it (you'll need this later)

## Step 5: (Optional) Comment Moderation Emails

Blog comments are not posted publicly until you approve them. When someone submits a comment, you receive an email and the comment is **not** saved to the blog.

1. In EmailJS, go to **Email Templates** → **Create New Template**.
2. Name it something like "New blog comment".
3. Use these template variables in the body:
   - `{{from_name}}` – commenter’s name
   - `{{message}}` – comment text
   - `{{blog_slug}}` – which blog post (e.g. `my-portfolio-building-journey`)

Example template:

```
Subject: New comment on blog: {{blog_slug}}

Comment from: {{from_name}}

Post: {{blog_slug}}

Message:
{{message}}
```

4. Set **To Email** to your email. Save and note the **Template ID**.
5. Enable server-side sending: in EmailJS go to **Account** → **Security** → turn **Allow API requests from non-browser applications** (or similar) **ON**.
6. (Optional) In **Account** → **General**, copy your **Private Key** and add it to `.env.local` as `EMAILJS_PRIVATE_KEY` for more reliable server-side sending.

Add to `.env.local`:

```bash
EMAILJS_COMMENT_TEMPLATE_ID=your_comment_template_id_here
# Optional, for server-side sending:
# EMAILJS_PRIVATE_KEY=your_private_key_here
```

The comment API uses the same **service** and **public key** as the contact form (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`).

## Step 6: Configure Environment Variables

1. In the `bootcamp-milestone-4` folder, create or update `.env.local`
2. Add the following variables:

```bash
# EmailJS Configuration (contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# EmailJS Comment moderation (server-side; same service & public key as above)
EMAILJS_COMMENT_TEMPLATE_ID=your_comment_template_id_here

# MongoDB Configuration (from previous milestones)
MONGO_URI=your_mongodb_connection_string_here
```

**Important Notes:**
- The `NEXT_PUBLIC_` prefix is required for Next.js to expose those variables to the client-side code
- Never commit `.env.local` to Git (it should already be in `.gitignore`)
- Replace the placeholder values with your actual EmailJS credentials

## Step 7: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/contact`
3. Fill out the form and submit
4. Check your email inbox for the message

## Troubleshooting

- **"EmailJS configuration is missing"**: Make sure all three environment variables are set in `.env.local`
- **Email not received**: Check your spam folder and verify your EmailJS service is properly configured
- **CORS errors**: Make sure you're using the correct Public Key and that your domain is allowed in EmailJS settings

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For production use, consider upgrading to a paid plan.


