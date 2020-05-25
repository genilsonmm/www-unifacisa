$(document).ready(function(){

    init()

    $('button').click(function(){

        let livro = {
          'titulo' : $("#titulo").val(),
          'paginas': $("#paginas").val(),
          'imagem': $("#imagem").val()
        }

        $.ajax({
            type: 'POST', 
            url: 'http://localhost:3000/api/livro',
            data: JSON.stringify(livro),
            timeout: 5000,
            contentType: 'application/json',
            beforeSend: function() {
                $("#loading").show()
            },
            error: function(error) {
                $(".alert-success").hide()
                $(".alert-danger").fadeIn("slow").delay(2000).fadeOut(1000) 
                $("#loading").hide()
            },
            success: function(retorno) {
              
                $(".alert-success").fadeIn("slow").delay(2000).fadeOut(1000) 
                $(".alert-danger").hide()

                $("#titulo").val("")
                $("#paginas").val("")
                $("#imagem").val("")
                $("#loading").hide()
            } 
        });  
    })   
})

function init(){
    $("#loading").hide()
    $(".alert-success").hide()
    $(".alert-danger").hide()
}