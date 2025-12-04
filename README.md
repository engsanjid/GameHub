# GameHub – Modern Indie Game Library

GameHub is a stylish, interactive online platform designed to explore, discover, and support indie game developers. Featuring an urban, neon-themed interface, GameHub provides smooth navigation, detailed game pages, secure login, and personalized user experiences.

## Live Demo

🔗 Demo: https://cool-salmiakki-fd45d4.netlify.app/

# Project Purpose

GameHub aims to create an engaging space where users can:

Discover trending and top-rated indie games

Explore detailed game information

Manage personal profiles

Browse safely with protected routes

Enjoy a modern, fast, and responsive user experience

## Key Features
🔐 User Authentication & Profile Management

Email/Password Login & Google Sign-In

Strong password validation (min 6 chars, uppercase + lowercase required)

Protected Routes — game details require login

My Profile Page — view name, photo, email

Update Profile — user can change name + profile image URL

Forgot Password — email reset functionality
# Core User Experience

🎨 Stylish Urban UI — dark layout with neon accents

📱 Fully Responsive — mobile, tablet & desktop

🏷️ Dynamic Page Titles — reflects current route

🎞️ Banner Slider — highlights top and upcoming games

⭐ Popular Games Section — auto-sorted by rating

📰 Blog Section — articles with Read More feature

💌 Newsletter Signup — simple, elegant subscription box

### Game Details Page

Shows complete information:

Title

Game cover

Category

Ratings

Developer

Tags

Description

Download link

### Technical Highlights

⚛️ React SPA — smooth navigation without reloads

🎬 Framer Motion Animations

🔥 Firebase Authentication

⚙️ Environment Variables for secure Firebase keys

📁 SPA Fallback Config — no broken routes on reload

🎨 TailwindCSS + DaisyUI for rapid UI building

💡 Efficient sorting/filtering on All Games page

### NPM Packages Used
Package	Purpose
react-router-dom	SPA routing & protected routes
firebase	Authentication, user profile updates
framer-motion	Smooth animations & transitions
tailwindcss	Utility-first CSS framework
daisyui	Ready UI components for styling
swiper	Responsive banner slider
react-icons	Modern icon library
# Folder Structure
```
src/
 ├── component/
 ├── hooks/
 ├── Page/
 ├── Root/
 ├── router/
 ├── assets/
 ├── App.jsx
 ├── main.jsx
 ```