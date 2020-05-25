const express = require('express')
const server = express();

//função middleware
server.get('/', function(req, res){
    res.send('<h1>Index!</h1>')
})

server.use(() => {
    console.log("Sempre irá chamar esse middleware!!")
})

server.listen(3000, function(){
    console.log('Executando....')
})