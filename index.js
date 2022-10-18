const express =  require('express')
const server =  express()
const db = require('./src/models/db.json') 


server.get('/', (req, res)=>{
    return res.json(db)
})


server.listen(3000, () =>
console.log("servidor rodando na porta: http://localhost:3000"))
