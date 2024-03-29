// See https://github.com/typicode/json-server#module
const express = require('express');
const path = require('path');
const jsonServer = require('json-server')

const server = jsonServer.create()

// Comment out to allow write operations
const router = jsonServer.router('db.json')

const staticMiddleware = express.static(path.join(__dirname, 'public'));

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/static', staticMiddleware);

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
