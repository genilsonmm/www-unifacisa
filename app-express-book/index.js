const express = require('express')
const server = express()
const router = require('./router')
const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use('/api/v1', router)

const port = 3000
server.listen(port, () => console.log(`Executando na porta: ${port}`))