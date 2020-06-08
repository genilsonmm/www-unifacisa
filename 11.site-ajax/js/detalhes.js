$(document).ready(function(){

    obterLivro(getURLId())

    $("#itens_carrinho").text(obterItens().length)

    function obterLivro(id){
        $.ajax({
            type: 'GET', 
            url: 'http://localhost:3000/api/livros/' + id,
            timeout: 5000,
            contentType: 'application/json',
            cache: false,
            beforeSend: function() {
              console.log("solicitando...")
            },
            error: function(error) {
              console.log(error.statusText)
            },
            success: function(retorno) {
              console.log(retorno)
              let card = obterCard(retorno.titulo, retorno.paginas, retorno.imagem)
              $("#livro").append(card)
            } 
        }); 
    }

    function getURLId(){
        let queryString = window.location.search
        const urlParms = new URLSearchParams(queryString)
        return urlParms.get('id')
    }

    function obterCard(titulo, paginas, imagem){
        return `<div class="col">
                    <img src="${imagem}" height="600" alt="${titulo}" />
                </div>
                <div class="col">
                    <h2 class="card-title">Título: ${titulo}</h2>
                    <p class="card-text">Páginas: ${paginas}</p>
                    <buttton id="add_carrinho" class="btn btn-primary pull-right">Adicionar ao carrinho</button>
                </div>`
    }

    $(document).on('click', '#add_carrinho', function(){
        const livro_id = getURLId()

        let novo_livro = {
            livro_id: livro_id,
            quantidade: 1
        }

        adicionarItem(novo_livro)
        $("#itens_carrinho").text(obterItens().length)
    })
})