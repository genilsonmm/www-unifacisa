const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config()
const server = express()

//Interpreta dos dados enviados
server.use(bodyParser.urlencoded({extended: true}))
//Verifia e interpreta json
server.use(bodyParser.json())

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log(`Server running at port ${PORT}`))

module.exports = server