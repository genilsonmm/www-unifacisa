const urlApiGit =  "https://api.github.com/users";

window.onload = function(){
    $(".text-danger").hide();
    getUsers();  
}

function getUsers(oneUser){
    //Verifica se oneUser existe
    let url = oneUser ? `${urlApiGit}/${oneUser}` : urlApiGit;

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var responseData = request.response;

        //Se for passado o user name como parametro
        if(oneUser){
            showOneUser(responseData);
        }
        else{         
            showUsers(responseData);
        }
    }
}

function showUsers(users){
    
    $("#user_table").empty();

    for(let i=0;  i < users.length; i++){
        let user = {
            avatar: users[i].avatar_url,
            id: users[i].id,
            login: users[i].login,
            url: users[i].html_url
        }     
        createTableElements(user);
    }
}

//Esconde a tabela e exibe os dados o usuário
function showOneUser(user){

    $("#homeContent").hide();

    $("#userContent").show(); 
    $("#userContent").empty(); 

    if(user.name == null)
    {
        $("#userContent").append(`Usuário não encontrado! <br>`);
    }
    else{
        $("#userContent").append(`Usuário: ${user.login} <br>`);
        $("#userContent").append(`<img src='${user.avatar_url}' alt=${user.avatar_url} width=200 /> <br>`);
        $("#userContent").append(`Nome: ${user.name} <br>`);
        $("#userContent").append(`${user.location} <br>`);
        $("#userContent").append(`<a href='${user.html_url}' target='_blank'>${user.html_url}</a> <br>`);
    }

    $("#userContent").append("<a id='voltar' href='#'>Voltar</a>");
}

//'Escuta' o evento de clik. Esconde os dados do usuário e exibe a tabela
$(document).on('click', '#voltar', function() { 
    $("#userContent").hide();
    $("#homeContent").show(); 
});


function createTableElements(user){
 
    $("#user_table").append("<tr>");
    
    let object_keys = Object.keys(user);
    
    for(let key=0; key < object_keys.length; key++)
    {
        let currentKey = object_keys[key];
        if(currentKey === "avatar")
        {
            let img = "<img src=" +user[currentKey] +" alt='Avatar' width=60 />";
            $("#user_table").append("<td>" + img + "</td>");
        }
        else if(currentKey === "url")
        {
            let a = "<a href=" + user[currentKey] +" target='_blank'>" +user[currentKey]+ "</a>";
            $("#user_table").append("<td>" + a + "</td>");
        }
        else{
            $("#user_table").append("<td>"+ user[currentKey] +"</td>");
        }
    }

    $("#user_table").append("</tr>");
}

//Evento de click da pesquisa por usuário
$("button").click(function(){
    let userName = $("input").val();

    if(userName === ''){
        $(".text-danger").show();
    }
    else{
        $(".text-danger").fadeOut(5000);
        $("input").val("");
        getUsers(userName);
    }
});
