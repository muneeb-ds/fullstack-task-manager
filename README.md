# Task Manager

A simple task management application built with Node.js, Express, and vanilla JavaScript. The application allows users to create, read, update, and delete tasks.

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack-task-manager
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=taskmanager
   DB_HOST=localhost
   DB_PORT=5432
   BACKEND_API_URL=http://localhost:5001
   ```

3. **Start the application**
   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001
   - API Documentation: http://localhost:5001/api-docs

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Edit task titles inline
- Responsive design
- Real-time updates

## Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- Nginx for serving static files

### Backend
- Node.js with Express
- PostgreSQL database
- RESTful API

### Infrastructure
- Docker for containerization
- Docker Compose for orchestration

## Project Structure
```
fullstack-task-manager/
├── client/             # Frontend application
│   ├── index.html     # Main HTML file
│   ├── styles.css     # CSS styles
│   ├── nginx.conf     # Nginx configuration
│   └── Dockerfile     # Frontend container config
├── server/            # Backend application
│   ├── server.js      # Express server
│   ├── config/        # Configuration files
│   └── Dockerfile     # Backend container config
├── docker-compose.yml # Service orchestration
└── .env              # Environment variables
```

## API Endpoints

```
GET    /api/tasks      - Get all tasks
POST   /api/tasks      - Create new task
PUT    /api/tasks/:id  - Update task
DELETE /api/tasks/:id  - Delete task
GET    /health         - Health check
```

## Development

### Prerequisites
- Docker and Docker Compose
- PostgreSQL (if running database locally)
- Node.js (for local development)

### Local Development
1. Start the database (if running locally)
2. Start the backend:
   ```bash
   cd server
   npm install
   npm start
   ```
3. Start the frontend:
   ```bash
   cd client
   # Serve static files using any static file server
   ```

### Using Docker
```bash
# Build and start all services
docker-compose up --build

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## Troubleshooting

### Common Issues
1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check database credentials in `.env`
   - Verify database host and port

2. **Frontend Not Loading**
   - Check if nginx is running
   - Verify port 3000 is available
   - Check browser console for errors

3. **API Not Responding**
   - Ensure backend service is running
   - Check port 5001 is available
   - Verify API URL in frontend

## License
MIT