const express = require('express')
const routes = express.Router()
const db = require('../models/db.json')


module.exports = routes

routes.get('/', (req, res)=>{
    return res.json(db)
})

routes.post('/', (req, res) => {
    res.send('POST request')
})

routes.put('/user', (req, res) => {
    res.send('PUT request')
})

routes.delete('/delete/:id', (req, res) => {
    res.send('DELETE request')
})