const express = require('express')
const router = express.Router()

const livroService = require('../controller/livroController')

livroService(router)

module.exports = router