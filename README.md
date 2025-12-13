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

---
## API Documentation

### Base URL
http://localhost:4000

---

### Authentication

#### Register
POST /api/auth/register  
Body:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password"
}

#### Login
POST /api/auth/login
Body:
```json
{
    "email": "user@example.com",
    "password": "password"
}

#### Get current user
GET /api/auth/me
Headers:
Authorization: Bearer <JWT_TOKEN>

---

### Notes
All note routes require:
Header:
Authorization: Bearer <JWT_TOKEN>

#### Get Notes
GET /api/notes

#### Create Note
POST /api/notes

Body:

{
  "title": "Note title",
  "content": "Note content"
}

#### Update Note
PUT /api/notes/:id

Body:

{
  "title": "Updated title",
  "content": "Updated content"
}

#### Delete Note
DELETE /api/notes/:id


---

Note: Due to Postman requiring authentication to create/export collections in the current environment, detailed API documentation has been provided instead. All endpoints are fully testable using any REST client.


