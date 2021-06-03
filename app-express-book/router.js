const express = require('express')
const router = express.Router()
const data = require('./data')

router.get('/livros', (req, res) => {
    res.json(data)
})

router.get('/livro/:id', (req, res) => {
    const id = req.params.id
    const livro = data.filter(l => l.id == id)
    res.json(livro)
})

router.post('/livro', (req, res) =>{
    let novoLivro = {
        id: data.length + 1,
        titulo: req.body.titulo,
        paginas: req.body.paginas
    }

    data.push(novoLivro)
    res.json(novoLivro)
})

module.exports = router