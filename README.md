# Premium School Website

A modern, fully responsive educational website built with Next.js, TypeScript, Sanity CMS, and Supabase. The project includes a content management system, secure admin authentication, SEO optimization, and a scalable architecture designed for real-world use.

## ✨ Features

* Modern and responsive design
* Dynamic content management with Sanity CMS
* Secure admin authentication
* Protected dashboard routes
* Password reset functionality
* Dynamic blog system
* SEO optimization
* Mobile-first user experience
* Fast performance and optimized loading
* Clean and scalable codebase

## 🛠️ Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion

### CMS & Backend Services

* Sanity CMS
* Supabase Authentication

### Deployment

* Vercel

## 🔐 Admin Features

* Secure login system
* Protected admin dashboard
* Authentication middleware
* Password reset flow
* CMS-powered content updates

## 📈 SEO Features

* Dynamic metadata generation
* Automatic sitemap generation
* Open Graph support
* Structured data implementation
* Search-engine-friendly architecture
* Optimized page performance

## 📂 Project Structure

txt
src/
├── app/
├── components/
├── lib/
├── hooks/
├── sanity/
└── middleware.ts


## 🚀 Local Setup

Install dependencies:

bash
npm install


Create a `.env.local` file and add the required environment variables:

env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production


Start the development server:

bash 

npm run dev


Open:

http://localhost:3000

## 👨‍💻 About

This project was built as a real-world educational website featuring a CMS-driven architecture, secure authentication, modern UI/UX design, and SEO-focused implementation using Next.js, Sanity CMS, and Supabase.
