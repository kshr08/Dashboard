# Scalable Web App – Frontend Developer Task

This project is a full-stack scalable web application built as part of the Frontend Developer assignment.

---

## Tech Stack

### Frontend

* Next.js (App Router)
* Tailwind CSS
* JWT-based authentication
* Responsive UI

### Backend# Scalable Web App – Frontend Developer Task

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
> cd frontend
> npm install 
> npm run dev

### Backend
```bash
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

## Note on how I would scale the frontend-backend integration for production:
Scaling the Frontend–Backend Integration for Production

If this application were to be taken to production, the frontend and backend would be treated as two independent services that communicate through well-defined APIs.

On the frontend side, the Next.js app would be deployed on a platform like Vercel or Netlify, which provides built-in CDN support. This ensures fast load times across different regions. Static assets and pages can be cached, reducing unnecessary API calls. Environment variables would be used to switch API endpoints cleanly between development, staging, and production environments.

On the backend side, the Node.js API would be deployed as a stateless service. Since authentication is handled using JWTs, the backend does not rely on server-side sessions, which makes horizontal scaling straightforward. Multiple backend instances can be added behind a load balancer as traffic grows. Prisma acts as an abstraction layer over PostgreSQL, making database management, schema changes, and performance optimization easier.

For the database, PostgreSQL can be scaled using indexing, connection pooling, and read replicas if required. As the application grows, commonly accessed data can be cached using an in-memory store like Redis to improve response times.

From a security and reliability perspective, sensitive values such as JWT secrets and database credentials would be stored securely using environment variables or secret managers. HTTPS would be enforced across all services, and additional protections like rate limiting and request validation can be added to secure the APIs.

Finally, with a CI/CD pipeline in place, frontend and backend changes can be tested and deployed independently. The current modular project structure already supports this, making future feature development and maintenance easier as the application scales.



* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* JWT Authentication
* bcrypt for password hashing

---

## Features

### Authentication

* User registration & login
* JWT-based authentication
* Protected routes
* Logout functionality

### Dashboard

* View logged-in user profile
* Create, read, update, delete notes
* Search & filter notes
* Responsive UI

---

## API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`
* GET `/api/auth/me`

### Notes

* GET `/api/notes`
* POST `/api/notes`
* PUT `/api/notes/:id`
* DELETE `/api/notes/:id`

---

## Setup Instructions

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npx prisma migrate dev
node server.js
```

---

## API Documentation

### Base URL

```
http://localhost:4000
```

---

### Authentication

#### Register

**POST** `/api/auth/register`

Body:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password"
}
```

#### Login

**POST** `/api/auth/login`

Body:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

#### Get current user

**GET** `/api/auth/me`

Headers:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

### Notes

All note routes require:

Header:

```http
Authorization: Bearer <JWT_TOKEN>
```

#### Get Notes

**GET** `/api/notes`

#### Create Note

**POST** `/api/notes`

Body:

```json
{
  "title": "Note title",
  "content": "Note content"
}
```

#### Update Note

**PUT** `/api/notes/:id`

Body:

```json
{
  "title": "Updated title",
  "content": "Updated content"
}
```

#### Delete Note

**DELETE** `/api/notes/:id`

---

**Note:** Due to Postman requiring authentication to create/export collections in the current environment, detailed API documentation has been provided instead. All endpoints are fully testable using any REST client.

---

## Note on how I would scale the frontend-backend integration for production:

### Scaling the Frontend–Backend Integration for Production

If this application were to be taken to production, the frontend and backend would be treated as two independent services that communicate through well-defined APIs.

On the frontend side, the Next.js app would be deployed on a platform like Vercel or Netlify, which provides built-in CDN support. This ensures fast load times across different regions. Static assets and pages can be cached, reducing unnecessary API calls. Environment variables would be used to switch API endpoints cleanly between development, staging, and production environments.

On the backend side, the Node.js API would be deployed as a stateless service. Since authentication is handled using JWTs, the backend does not rely on server-side sessions, which makes horizontal scaling straightforward. Multiple backend instances can be added behind a load balancer as traffic grows. Prisma acts as an abstraction layer over PostgreSQL, making database management, schema changes, and performance optimization easier.

For the database, PostgreSQL can be scaled using indexing, connection pooling, and read replicas if required. As the application grows, commonly accessed data can be cached using an in-memory store like Redis to improve response times.

From a security and reliability perspective, sensitive values such as JWT secrets and database credentials would be stored securely using environment variables or secret managers. HTTPS would be enforced across all services, and additional protections like rate limiting and request validation can be added to secure the APIs.

Finally, with a CI/CD pipeline in place, frontend and backend changes can be tested and deployed independently. The current modular project structure already supports this, making future feature development and maintenance easier as the application scales.
