# Service Architecture

## Project layout
- Frontend: ./Frontend/task-app (React + Vite)
- Backend: ./backend (Node + Express + Mongoose)
- Compose root: docker-compose.yml
- DB data volume: mongo-data

## Frontend (dev & prod)
- Dev: inside frontend run `npm install` then `npm run dev` (Vite default port 3000).
- Build: `npm run build`.
- Dockerfile: build static files, serve with Nginx in a frontend container.

## Backend
- Path: ./backend
- Main libs: express, mongoose, cors, body-parser
- Dev: `npm install` then `npm run dev` (e.g., nodemon) — default port 5000.
- Dockerfile: use Node base image, install deps, copy code, expose 5000.

## Database
- MongoDB container named `mongo`.
- Connection string from backend: mongodb://mongo:27017/taskdb
- Persist data via volume: mongo-data:/data/db

## Docker Compose (summary)
- Services: frontend, backend, mongo
- Shared network so services can reach each other by service name.
- Start everything: `docker compose up -d`
- Example service responsibilities:
    - frontend: serves built React app (nginx)
    - backend: REST API on port 5000
    - mongo: database

## Quick commands
- Build & start: `docker compose up -d --build`
- Stop & remove: `docker compose down -v`

## Architecture (overview)
```
Client Browser
     └─HTTP→ Frontend (React + Vite build, Nginx container)
                        └─API→ Backend (Node + Express, container: backend, port 5000)
                                         └─MongoDB Driver→ Mongo (container: mongo, mongo-data volume)
```
