const urlApiGitHub = "https://api.github.com/users"

$(document).ready(function(){
    $("#user-detail").hide()
    getUsers()
})

function getUsers(userName){

    let url_github = userName ? `${urlApiGitHub}/${userName}` : urlApiGitHub

   $.ajax({
       url: url_github,
       type: 'GET',
       beforeSend: function(){
           console.log("Carregando ...")
       }
   })
   .done(function(data){
       if(userName)
       {
            let user = formatUser(data)
            showUser(user)
       }
       else
       {
            let formattedUsers = formatUsers(data)
            showUsers(formattedUsers)
       }
   })
   .fail(function(msg){
       console.log(msg)
   })
}

function showUsers(users){

    for(let i=0; i < users.length; i++){
        const img = "<img src=" + users[i].avatar + " width=80 alt='user photo'/>"
        const url = "<a href="+ users[i].url + " target='_blank'>" + users[i].url + "</a>"

        $("#user_data").append("<tr>" +
                                    "<td>"+ users[i].id +"</td>"+
                                    "<td>"+ img +"</td>"+
                                    "<td>"+ users[i].login +"</td>"+
                                    "<td>"+ url +"</td>"+
                                "</tr>")          
    }
}

function showUser(user){
    $("#user-detail").append(`<img src='${user.avatar}' alt='avatar' width='80'/> <br>`)
    $("#user-detail").append(`Login: ${user.login} <br>`)
    $("#user-detail").append(`Repositório: <a href='${user.url}' target='_blank'>${user.url}</a>`)
}

function formatUsers(users){
    let formattedUsers = []
    for(let i=0; i < users.length; i++){
        let user = {
            id: users[i].id,
            avatar: users[i].avatar_url,
            login: users[i].login,
            url: users[i].html_url
        }
        formattedUsers.push(user)
    }

    return formattedUsers
}

function formatUser(user){
    return {
        avatar: user.avatar_url,
        login: user.login,
        url: user.html_url    
    }
}

$("#btnSearch").click(function(){

    let userName = $("input").val()
    if(userName == ''){
        alert("Digite o username!")
    }
    else{
        $("#user-detail").show()
        $("#users-content").hide()
        getUsers(userName)
    }
})