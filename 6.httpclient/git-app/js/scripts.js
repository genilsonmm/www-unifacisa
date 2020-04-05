const url =  "https://api.github.com/users";

window.onload = function(){
    getUsers();
}

function getUsers(){
    //Javascript
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var users = request.response;

        showUsers(users);
    }
}

function showUsers(users){
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
