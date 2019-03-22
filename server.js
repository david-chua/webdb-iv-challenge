const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

const dishesRouter = require('./data/controllers/dishes.js');
const recipesRouter = require('./data/controllers/recipes.js');

const server = express();

const parser = express.json();
const logMiddleware = logger('dev');
const cors = require('cors');

server.use(parser, logMiddleware);
server.use(cors());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

server.get('/', (req,res,next) => {
  res.send(`
    <h2> Recipe Channel </h2>
    <p> David's Recipe Book </p>
    `
  )
});


module.exports = server;
