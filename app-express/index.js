const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Olá express</h1>')
})

server.use(() => {
    console.log('Sempre irá chamar esse middleware!')
})

server.listen(3000, () => console.log(`Ouvindo na porta 3000`))