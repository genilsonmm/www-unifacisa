$(document).ready(function(){

    showLocalActivities();

    $(document).on('keypress', function(e){

        //Tecla Enter code 13
        if(e.which == 13){

            sessionStorage.setItem(getKey(), new Date());
            let activity = $('input').val();
            
            if(activity == '') return;

            let key = getKey();

            localStorage.setItem(key, activity);

            $('input').val("");

            showLocalActivities();
        }
    });

    function showLocalActivities(){
        let keys = Object.keys(localStorage);


        $("#cards").empty();

        if(keys.length > 0){

            keys.map(key => {
                let card = `<div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${ localStorage.getItem(key) }</h5>
                                    <button data-button='${key}' class="btn btn-success">Done</button>
                                </div>
                            </div>`;

                 $("#cards").append(card);
            });           

        }else{
            $("#cards").append("<h4> No tasks</h4>");
        }
    }

    function getKey(){
        let key = new Date();
        return 'myappsiu' + key.getFullYear().toString() +
                            key.getMonth().toString() +
                            key.getDay().toString() +
                            key.getHours().toString() +
                            key.getMinutes().toString() +
                            key.getMilliseconds().toString();
        
    }

    $(document).on('click','button', function(){
        let key = $(this).attr('data-button');
        localStorage.removeItem(key);
        showLocalActivities();
    })

});


/*

*/