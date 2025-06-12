# Task Manager CRUD Application

A full-stack task management application built with Node.js, Express, React, and PostgreSQL that demonstrates CRUD operations. The application is containerized using Docker for easy deployment and development.

## Tech Stack

- **Frontend**: React with TypeScript, Material-UI
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose

## Prerequisites

- Docker and Docker Compose installed
- PostgreSQL database (local or remote)
- Node.js (for local development)

## Project Structure

```
task-manager/
├── client/                 # React frontend
│   ├── src/               # Source files
│   ├── Dockerfile         # Frontend container configuration
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   │   ├── db.js        # Database configuration
│   │   └── initDb.js    # Database initialization
│   ├── Dockerfile        # Backend container configuration
│   └── package.json      # Backend dependencies
└── docker-compose.yml    # Container orchestration
```

## Environment Setup

1. Create a `.env` file in the root directory:

```env
# Database Configuration
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=localhost
DB_PORT=5400
DB_SSL=false  # Set to true if using SSL connection
```

## Running the Application

### Using Docker (Recommended)

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001

### Local Development

1. Backend Setup:
   ```bash
   cd server
   npm install
   npm run dev
   ```

2. Frontend Setup:
   ```bash
   cd client
   npm install
   npm start
   ```

## API Endpoints

### Tasks

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get a single task
- `POST /api/tasks` - Create a new task
  ```json
  {
    "title": "Task title"
  }
  ```
- `PUT /api/tasks/:id` - Update a task
  ```json
  {
    "title": "Updated title",
    "completed": true
  }
  ```
- `DELETE /api/tasks/:id` - Delete a task

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Modern Material-UI interface
- Real-time updates
- Responsive design
- TypeScript for type safety
- Docker containerization
- PostgreSQL database integration

## Development

### Adding New Features

1. Backend:
   - Add new routes in `server.js`
   - Create new database tables in `initDb.js`
   - Add new API endpoints as needed

2. Frontend:
   - Add new components in `client/src/components`
   - Update API calls in `App.tsx`
   - Add new types in TypeScript files

### Database Schema

The application uses a single `tasks` table with the following structure:

```sql
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Troubleshooting

### Common Issues

1. Database Connection:
   - Ensure PostgreSQL is running
   - Verify database credentials in `.env`
   - Check if the database port is correct

2. Container Issues:
   - Use `docker-compose logs` to check container logs
   - Ensure ports 3000 and 5001 are available
   - Check if containers are running with `docker-compose ps`

3. Frontend Issues:
   - Clear browser cache
   - Check browser console for errors
   - Verify API endpoint URLs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.