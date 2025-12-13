# Scalable Web App – Frontend Developer Task

This project is a full-stack scalable web application built as part of the Frontend Developer assignment.

## Tech Stack
Frontend:
- Next.js (App Router)
- Tailwind CSS
- JWT-based authentication
- Responsive UI

Backend:
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt for password hashing

---

## Features

### Authentication
- User registration & login
- JWT-based authentication
- Protected routes
- Logout functionality

### Dashboard
- View logged-in user profile
- Create, read, update, delete notes
- Search & filter notes
- Responsive UI

---

## API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me`

### Notes
- GET `/api/notes`
- POST `/api/notes`
- PUT `/api/notes/:id`
- DELETE `/api/notes/:id`

---

## Setup Instructions

### Frontend
cd frontend
npm install
npm run dev

### Backend
```bash
cd backend
npm install
npx prisma migrate dev
node server.js


