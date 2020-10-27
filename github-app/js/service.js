$(document).ready(function(){
   
    $("#userContent").hide();

    const urlApiGitHub = "https://api.github.com/users"

    getUsers()

    function getUsers(userName){
        let request = new XMLHttpRequest()

        let url = userName ? `${urlApiGitHub}/${userName}` : urlApiGitHub

        //Verbos HTTP
        //GET, PUT, POST, DELETE
        request.open('GET', url) 
        request.responseType = 'json'
        request.send()

        request.onload = function(){
            let responseData = request.response

            if(userName)
            {
                formatUser(responseData)
            }
            else
            {
                formatUsers(responseData)
            }
        }
    }

    function formatUser(user){
       if(user.name == null){
           $("#userContent").append("Usuário não encontrado!")
       }
       else{
        $("#userContent").append(`Usuário: ${user.login} <br>`)
        $("#userContent").append(`<img src='${user.avatar_url}' alt='Avatar' width=60 /> <br>`)
       }


       $("#userContent").append("<a href='#' target='_blank'>Voltar</a>")

    }

    function formatUsers(users){
        for(let i=0; i < users.length; i++){
            
            let user = {
                avatar: users[i].avatar_url,
                id: users[i].id,
                login: users[i].login,
                url: users[i].html_url
            }

            showUser(user)
        }
    }

    function showUser(user){
        $("#user_table").append("<tr>")

        let object_keys = Object.keys(user);

        for(let key=0; key< object_keys.length; key++){

            let currentKey = object_keys[key]
            if(currentKey === "avatar"){
                
                let img = "<img src=" + user[currentKey] + " alt='Avatar' width=60 />"
                
                $("#user_table").append("<td>" + img + "</td>")

            }
            else if(currentKey === "url"){
                let a = "<a href=" + user[currentKey] + " target='_blank'>" + user[currentKey] + "</a>"
                
                $("#user_table").append("<td>" + a + "</td>")  
            }
            else{
                $("#user_table").append("<td>" + user[currentKey] + "</td>")  
            }
        }

        $("#user_table").append("</tr>")
    }

    $("#btnPerquisar").click(function(){

        $("#homeContent").hide();
        $("#userContent").show();
        

        let userName = $("input").val()
        
        getUsers(userName)

    })
})
