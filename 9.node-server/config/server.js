const express = require('express')
const routes = require('./routes')

//inicializa o express
const server = express();

server.use(express.json());
server.use(express.urlencoded()); 

server.use('/api', routes)

server.listen(3000, ()=> console.log('Execurando...'))

module.exports = server