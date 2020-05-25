const database = require('../data/database')
const sleep = require('sleep');

module.exports = function(router){

    router.get('/livros', (request, response) => {
        response.json(database)
    })

    router.get('/livros/:id', (request, response) =>{
        let id = request.params.id
        let livro = database.filter(livro => livro.id == id)
        response.json(livro)
    })

    router.post('/livro', (request, response) => {

        sleep.sleep(3);
        console.log(request.body)

        let novoLivro = {
            id: database.length + 1,
            titulo: request.body.titulo,
            paginas: request.body.paginas
        }

        database.push(novoLivro)

        response.json(novoLivro)
    })
}