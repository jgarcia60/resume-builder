$(document).ready(function(){
    //need to figure out how to put user email to the route
    $.ajax({
        method:'GET',
        url: "/api/login/jgarcia@gmail.com"
    }).then(function(data){
        console.log("getting resume data")
        console.log(data);
    })
})