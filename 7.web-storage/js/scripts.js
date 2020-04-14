$(document).ready(function(){

    sessionStorage.setItem(getKey(), new Date());

    showLocalActivities();

    function showLocalActivities(){
        let keys = Object.keys(localStorage);

        $("#cards").empty();
        
        if(keys.length > 0)
        {
            keys.map(key => {  

                let card = `<div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${localStorage.getItem(key)}</h5>           
                                    <button data-button='${key}' class="btn btn-success pull-right">Done</button>   
                                </div>
                            </div>`;

                $("#cards").append(card);
            });
        }else{
            $("#cards").append("<h4 class='text-center'>No tasks</h4>")
        }
    }

    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            let activity = $("input").val();

            if(activity == '') return;

            let key = getKey();

            localStorage.setItem(key, activity); 

            $("input").val("");

            showLocalActivities();
        }
    });

    function getKey(){
        let key = new Date();
        return 'act' + key.getFullYear().toString() + 
                       key.getMonth().toString() +
                       key.getDay().toString() +
                       key.getHours().toString() +
                       key.getMinutes().toString() +
                       key.getSeconds().toString() +
                       key.getMilliseconds().toString();
    }

    $("#cards").on('click', 'button', function(){
        let key = $(this).attr('data-button');
        localStorage.removeItem(key);
        showLocalActivities();
    })
});