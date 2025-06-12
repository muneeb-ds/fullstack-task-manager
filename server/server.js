const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const { createTables } = require('./config/initDb');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');

const app = express();
const port = process.env.PORT || 5001;

// Initialize database tables
const initializeApp = async () => {
  try {
    // Create required tables
    await createTables();

    // CORS configuration
    app.use(cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type']
    }));

    // Middleware
    app.use(bodyParser.json());

    // Request logging middleware
    app.use((req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      console.log('Request body:', req.body);
      next();
    });

    // Swagger Documentation
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

    // GET all tasks
    app.get('/api/tasks', async (req, res) => {
      try {
        const result = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
        res.json(result.rows);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Error fetching tasks' });
      }
    });

    // GET single task
    app.get('/api/tasks/:id', async (req, res) => {
      try {
        const result = await db.query('SELECT * FROM tasks WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) {
          return res.status(404).json({ message: 'Task not found' });
        }
        res.json(result.rows[0]);
      } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ message: 'Error fetching task' });
      }
    });

    // CREATE task
    app.post('/api/tasks', async (req, res) => {
      try {
        const { title } = req.body;
        const result = await db.query(
          'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
          [title]
        );
        res.status(201).json(result.rows[0]);
      } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Error creating task' });
      }
    });

    // UPDATE task
    app.put('/api/tasks/:id', async (req, res) => {
      try {
        const { title, completed } = req.body;
        const result = await db.query(
          'UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
          [title, completed, req.params.id]
        );
        if (result.rows.length === 0) {
          return res.status(404).json({ message: 'Task not found' });
        }
        res.json(result.rows[0]);
      } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Error updating task' });
      }
    });

    // DELETE task
    app.delete('/api/tasks/:id', async (req, res) => {
      try {
        const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [req.params.id]);
        if (result.rows.length === 0) {
          return res.status(404).json({ message: 'Task not found' });
        }
        res.status(204).send();
      } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Error deleting task' });
      }
    });

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error('Error:', err);
      res.status(500).json({ message: 'Internal server error' });
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log(`API Documentation available at http://localhost:${port}/api-docs`);
    });
  } catch (error) {
    console.error('Failed to initialize application:', error);
    process.exit(1);
  }
};

// Start the application
initializeApp(); 