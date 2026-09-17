# Portfolio Project Architecture and Guidelines

## Project Overview
This is a full-stack portfolio application.
- Frontend: React + Vite, Tailwind CSS
- Backend: Express.js, Mongoose/MongoDB

## Environment Variables
The backend requires a `.env` file in the `backend/` directory with the following variables:
- `PORT`: Port for the server (default: 5000)
- `MONGODB_URI`: Connection string for MongoDB
- `JWT_SECRET`: Secret key for JWT
- `JWT_EXPIRE`: JWT expiration (default: 30d)
- `NODE_ENV`: Environment mode (development/production)
- `FRONTEND_URL`: URL of the frontend (default: http://localhost:5173)

## Development Workflow

### Backend (`/backend`)
- `npm run dev` (starts with nodemon)
- `npm start` (starts with node)

### Frontend (`/frontend`)
- `npm run dev` (starts vite)
- `npm run build` (builds for production)
- `npm run lint` (runs oxlint)

## Coding Style & Standards
- Use `require` for modules as configured (CommonJS).
- Follow Express middleware patterns for authentication and error handling.
