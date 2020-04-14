const url =  "https://covid19-brazil-api.now.sh/api/report/v1";

window.onload = function(){
    getData();
}

function getData(){
    //Javascript
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var report = request.response;
        //console.log(report['data']);
        showdCovid19Cases(report['data']);
    }
}

function showdCovid19Cases(report){
    
    for(let i=0;  i < report.length; i++){

        let currentDate = report[i];

        let covidReport = {
            state: currentDate["state"],
            cases: currentDate["cases"],
            deaths: currentDate["deaths"],
        } 
        
        console.log(covidReport);
        createTableElements(covidReport);  
    }
}

function createTableElements(covidReport){
 
    $("#covid_table").append("<tr>");
    
    $("#covid_table").append("<td>"+ covidReport["state"] +"</td>");
    $("#covid_table").append("<td>"+ covidReport["cases"] +"</td>");
    $("#covid_table").append("<td>"+ covidReport["deaths"] +"</td>");

    $("#covid_table").append("</tr>");
}

/*
$.ajax({
    type: "GET",
    dataType: "json",
    url: "https://covid19-brazil-api.now.sh/api/report/v1",
    success: function(data) {
    }
});
*/