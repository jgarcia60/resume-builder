$(document).ready(function(){
    $("button").on("click", function(event){
        event.preventDefault();
        let userEmail = $(".userEmail").val();
        let userPwd = $(".userPassword").val();
        
        $.ajax({
            method: "POST",
            url: "/api/login",
            data: {
                email: userEmail,
                password: userPwd
            }
        })
        .then(function(){
            console.log("data sent!")
        })
        .catch(err =>{
            console.log(err);
        })
    })
})