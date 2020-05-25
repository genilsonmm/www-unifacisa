const server = require('./config/server')
const router = require('./config/router')
const cors = require('cors')

server.use(cors())

server.use('/api', router)

