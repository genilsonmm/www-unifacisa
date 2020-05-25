const express = require('express')
const router = express.Router()
const data = require('./data')

router.get('/curso', (req, res) =>{  
    res.json(data)
})

router.get('/curso/:id', (req, res) =>{
    let id = req.params.id;
    let livro = data.filter(l => l.id == id)
    res.json(livro)
})

module.exports = router