const http = require('http')

const server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end('<h1>Melhor usar o Express!</h1>')
})

const port = 8081
server.listen(port, () => console.log('Executando na porta: ' + port))