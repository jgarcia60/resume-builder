$(document).ready(function(){
    $("form.login").on("submit", function(event){
        event.preventDefault();
        let userEmail = $(".userEmail").val();
        let userPwd = $(".userPassword").val();
        
        //verify the user 
        $.ajax({
            method: "POST",
            url: "/api/login",
            data: {
                email: userEmail,
                password: userPwd
            }
        }).then(function(){
            console.log("data sent!");
            window.location.replace("/index");
        }).catch(err =>{
            console.log(err);
        })
    })
})