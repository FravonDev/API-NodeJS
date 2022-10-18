const express =  require('express')
const server =  express()
const db = require('./src/models/db.json') 

const routes = require('./src/routes/routes.js')
server.use(routes)


server.listen(3000, () =>
console.log("servidor rodando na porta: http://localhost:3000"))
