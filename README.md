# Task Manager CRUD Application

A simple task management application built with Node.js, Express, and React that demonstrates CRUD operations.

## Project Structure

```
task-manager/
├── client/          # React frontend
└── server/          # Node.js/Express backend
```

## Setup Instructions

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_PORT=5432
DB_SSL=false  # Set to true if using SSL connection
```

### Database Setup

1. Ensure your external PostgreSQL database is running and accessible
2. Create the required table using the schema in `server/db/schema.sql`:

```sql
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Running with Docker

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001

## Features

- Create new tasks
- Read/View all tasks
- Update existing tasks
- Delete tasks
- Mark tasks as complete/incomplete
- Modern Material-UI interface

## API Endpoints

- GET /api/tasks - Get all tasks
- GET /api/tasks/:id - Get a single task
- POST /api/tasks - Create a new task
- PUT /api/tasks/:id - Update a task
- DELETE /api/tasks/:id - Delete a task 