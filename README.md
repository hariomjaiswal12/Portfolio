# Portfolio Project

## Description
This is a full-stack portfolio application featuring a React-based frontend and an Express/Node.js backend with MongoDB.

## Folder Structure

### Backend (`/backend`)
- Express.js server
- MongoDB database integration using Mongoose
- API routes for Authentication and Contacts

### Frontend (`/frontend`)
- React.js application built with Vite
- Styling with Tailwind CSS
- State management with React Router and Axios for API calls

## Setup

### Prerequisites
- Node.js (v18+)
- MongoDB

### Backend
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill the variables: `cp .env.example .env`
4. Start the server: `npm run dev`

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## API Endpoints

### Authentication
- POST `/api/auth/login`

### Contacts
- POST `/api/contact` - Create a contact
- GET `/api/contact` - Get all contacts (Protected, Admin)
- DELETE `/api/contact/:id` - Delete a contact (Protected, Admin)

### Health
- GET `/health` - Health check endpoint
