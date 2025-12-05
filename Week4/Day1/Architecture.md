This project uses a clean, production-ready Node.js backend with layered architecture:
Controller → Service → Repository → Model. 
It ensures maintainability, scalability, and clear separation of concerns.

#Folder Structure-
src/
├── config/
|
├── loaders/
|
├── models/
|
├── routes/
|
├── controllers/
|
├── services/
|
├── repositories/
|
├── middlewares/
|
├── utils/
|
├── jobs/
|
└── logs/
|
└──server.js
|
└──.env.local
|
└──.env.dev
|
└──.env.prod
|
└──package.json
|
└──package-lock.json

#Key Concepts-

Controllers: Handle requests and responses.

Services: Business logic.

Repositories: DB operations.

Models: DB schemas.

Loaders: Initialize app, DB, middlewares, routes.

Logging: Winston/Pino logs server, DB, routes, and errors.

Error Handling: Centralized global error handler.

Jobs: Background async tasks like emails or cleanup.

Config Management: Environment-based config (.env.local/dev/prod).