const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./routers/project-router');
const TaskRouter = require('./routers/task-router');
const ResourceRouter = require('./routers/resource-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter);
server.use('/api/resources', ResourceRouter);

server.get('/', (req, res) => {
    res.send(`
      <h1>DB Sprint Challenge</h1>
      <h3>By: Jake Gifford</h3>
    `);
});

module.exports = server;