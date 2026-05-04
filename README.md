# 🧱 Slab – Tiles Gallery

A modern, responsive **Tiles Gallery web application** built with Next.js that allows users to explore, search, and view detailed tile designs with authentication support.

---

## 🌐 Live Demo

🔗 https://b13-a08-slab-elmanpathan-6509s-projects.vercel.app/

---

## 📌 Project Purpose

Slab is a visually rich tile gallery platform where users can:

- Browse featured and categorized tiles
- Search tiles dynamically
- View detailed tile information
- Authenticate using email/password or Google
- Manage and update profile information

This project demonstrates full-stack development using **Next.js App Router**, **BetterAuth**, **MongoDB**, and modern UI design principles.

---

## ✨ Key Features

### 🏠 Home Page

- Hero banner with CTA ("Discover Your Perfect Aesthetic")
- Animated marquee showcasing updates and trends
- Featured tiles section (top 4 tiles from database)

---

### 🧱 All Tiles Page

- Full tile gallery fetched from backend
- Search functionality (by tile title)
- Responsive tile cards
- Navigation to detailed view page

---

### 🔍 Tile Details Page

- Large high-resolution tile preview
- Complete tile information:
  - Title
  - Description
  - Material
  - Dimensions
  - Price
  - Tags / Category

---

### 🔐 Authentication System

- Email & Password login/register
- Google OAuth login
- Protected routes
- Toast notifications for success/error handling
- Redirect after login/logout

---

### 👤 My Profile (Protected Route)

- View logged-in user data
- Update:
  - Name
  - Profile Image URL
- Secure MongoDB-backed update system

---

### ⚙️ Additional Features

- Loading UI for data fetching
- 404 Not Found page handling
- Fully responsive design (mobile, tablet, desktop)
- Clean route protection system
- Smooth animations using Framer Motion

---

## 🚀 Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/blitz-003/B13-A08-slab.git
cd ./B13-A08-slab
- create an .env file with your own credentials

-----------------------------------
.env file contents
----------------------------------
BETTER_AUTH_SECRET=<better_auth_secret>
BETTER_AUTH_URL=http://localhost:3000 # Base URL of your app
MONGODB_URI=<mongodb_uri>
GOOGLE_CLIENT_ID=<google_client_id>
GOOGLE_CLIENT_SECRET=<google_client_secret>
-------------------------------------
npm install
npm run dev
```
