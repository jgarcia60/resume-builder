$(document).ready(function(){
    //need to figure out how to put user email to the route
    $.get("/api/user_data", function(data){
        console.log(data);
        $('#userName').text(data.userName);
    })
})