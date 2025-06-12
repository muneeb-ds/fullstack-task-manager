const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'A RESTful API for managing tasks',
    },
    servers: [
      {
        url: 'http://localhost:5001',
        description: 'Development server',
      },
    ],
  },
  apis: ['./server.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = specs; 