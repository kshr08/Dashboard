# Scalable Web App – Frontend Developer Task

This project is a full-stack scalable web application built as part of the Frontend Developer assignment.  
It demonstrates authentication, protected APIs, and a responsive dashboard with CRUD functionality.

---

## Tech Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS
- JWT-based authentication
- Responsive UI

### Backend
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

### Authentication
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

### Notes
- GET /api/notes
- POST /api/notes
- PUT /api/notes/:id
- DELETE /api/notes/:id

---

## Setup Instructions

### Frontend
cd frontend  
npm install  
npm run dev  

### Backend
cd backend  
npm install  
npx prisma migrate dev  
node server.js  

---
#### API Documentation

### Base URL
http://localhost:4000

---

### Authentication

#### Register
POST /api/auth/register  

Body:  
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password"
}

#### Login
POST /api/auth/login  

Body:  
{
  "email": "user@example.com",
  "password": "password"
}

#### Get Current User
GET /api/auth/me  

Headers:  
Authorization: Bearer <JWT_TOKEN>

---

### Notes (Protected Routes)

All note routes require:  
Authorization: Bearer <JWT_TOKEN>

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

---

## Scaling the Frontend–Backend Integration for Production

If this application were taken to production, the frontend and backend would be treated as independent services communicating through well-defined APIs.

- Frontend deployed on platforms like Vercel or Netlify with CDN support
- Backend deployed as a stateless Node.js service using JWT authentication
- Horizontal scaling enabled via load balancers
- PostgreSQL optimized with indexing, pooling, and read replicas
- Redis can be introduced for caching frequently accessed data
- Secure storage of secrets using environment variables or secret managers
- HTTPS enforced with rate limiting and request validation
- CI/CD pipelines enable independent frontend and backend deployments

The modular project structure already supports long-term scalability and easier maintenance.
