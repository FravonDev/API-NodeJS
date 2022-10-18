const express =  require('express')
const server =  express()
const db = require('./src/models/db.json') 
const port = 3000 || process.env.PORT;
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

const routes = require('./src/routes/routes.js')
server.use(routes)


server.listen(port, () =>
console.log(`servidor rodando na porta: http://localhost:${port}`))
