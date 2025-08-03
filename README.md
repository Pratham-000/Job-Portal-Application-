# Job Portal Application

A modern job portal built with **React**, **Vite**, **Firebase Auth**, and **Firestore**. It allows users to browse and search job listings, and sign up/login with Google Authentication.

## Tech Stack

- **Frontend:** React + Vite
- **Authentication:** Firebase (Google Sign-In)
- **Database:** Firebase Firestore
- **Routing:** React Router
- **Styling:** Tailwind CSS (if used) / CSS Modules

## Features

- Google Sign-In/Sign-Out using Firebase Authentication
- Firestore-based job listing management
- Responsive and fast UI with Vite
- Job search and filter functionality
- Protected routes for logged-in users

## Folder Structure

src/
│
├── components/ # Reusable UI components
├── pages/ # Page-level components like Home, Login
├── services/ # Firebase configuration and auth handlers
├── data/ # Optional static job data (JSON)
├── App.jsx # Main app component with routes
└── main.jsx # React DOM render logic


## Firebase Environment Setup

Create a `.env` file in the root directory and add:
```
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
VITE_MEASUREMENT_ID=your_measurement_id
```
Copy
Edit

> Don't forget to add `.env` to your `.gitignore`.

## Run Locally

```bash
git clone https://github.com/your-username/job-portal-app.git
cd job-portal-app
npm install
npm run dev
```
# Deployment
You can deploy this project to:

Firebase Hosting

Vercel

Netlify

📄 License
MIT License © 2025 [Your Name]

vbnet
Copy
Edit

Let me know if you want a version with TypeScript, Tailwind setup, or Firebase deployment instructions.
