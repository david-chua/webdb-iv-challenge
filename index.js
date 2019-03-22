const express = require('express');
const helmet = require('helmet');
const db = require('./data/dbHelpers.js');

const server = express();

server.use(helmet());
server.use(express.json());



const port = process.env.PORT || 9090;
server.listen(port, () =>
console.log(`server is listening on port ${port}`));
