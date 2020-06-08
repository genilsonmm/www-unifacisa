function obterItens(){
    let itens_carrinho = localStorage.getItem("carrinho")
    return itens_carrinho == null ? [] : JSON.parse(itens_carrinho)
}

function adicionarItem(novo_livro){

    let itens_carrinho = obterItens()

    if(itens_carrinho.length > 0){
        if(obterLivro(itens_carrinho, novo_livro) == false)
        {
            itens_carrinho.push(novo_livro); 
        }
    }
    else{
        itens_carrinho.push(novo_livro); 
    }

    localStorage.setItem("carrinho", JSON.stringify(itens_carrinho))
}

function obterLivro(itens_carrinho, novo_livro){
    let livroExiste = false

    for(let i=0; i<itens_carrinho.length; i++){
        if(itens_carrinho[i].livro_id == novo_livro.livro_id){
            livroExiste = true;
            itens_carrinho[i].quantidade++
        }
    }

    return livroExiste
}