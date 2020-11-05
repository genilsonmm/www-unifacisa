$(document).ready(function(){

    showLocalActivities();

    $(document).on('keypress', function(e){
        if(e.which == 13){
            let atividade = $("input").val()
            
            if(atividade == '') return

            localStorage.setItem(getKey(), atividade)

            $("input").val("")

            showLocalActivities()
        }
    })

    $("#cards").on('click', 'button', function(){
        let key = $(this).attr('data-button')
        localStorage.removeItem(key);
        showLocalActivities()
    })

    function showLocalActivities(){
        let keys = Object.keys(localStorage)
        
        $("#cards").empty()
        
        if(keys.length > 0){

            keys.forEach(key => {
                let card = `<div class="card mt-2">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        ${ localStorage.getItem(key) }
                                    </h5>
                                    <button data-button='${key}' class="btn btn-success">
                                        Feito
                                    </button>
                                </div>
                            </div>`
                
                $("#cards").append(card)
            })

        }else{
            $("#cards").append("<h4 class='text-center'>Sem atividades</h4>")
        }

    }

    function getKey(){
        let date = new Date()
        return 'todoapp' + date.getFullYear().toString()+
                           date.getMonth().toString()+
                           date.getDay().toString()+
                           date.getHours().toString()+
                           date.getMinutes().toString()+
                           date.getSeconds().toString()+
                           date.getMilliseconds().toString()
    }

})