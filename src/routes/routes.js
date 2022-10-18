const express = require('express')
const routes = express.Router()
const db = require('../models/db.json')


module.exports = routes


routes.get('/', (req, res) => {
    res.json(db)
})

routes.post('/add', (req,res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    
    db.push(body)
    res.json(body)
})

routes.get('/itens/:id', (req,res) => {
    const id = req.params.id
    res.json(db[id-1])
})

//atualiza o item
routes.put('/update/:id', (req, res) => {
    const id = req.params.id
    db[id-1] = req.body
    res.json(db[id-1])
})
routes.delete('/itens/:id', (req, res) => {
    const id = req.params.id
    res.json(`Apaga o item ${id}`)
})