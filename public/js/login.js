$(document).ready(function(){
    $("button").on("click", function(event){
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
        }).catch(err =>{
            console.log(err);
        })
        
        //get resumes for this user
        $.ajax({
            method: "GET",
            url: "/api/login/" + userEmail
        }).then(function(){
            console.log("bring user data")
            window.location.replace("/index");
        }).catch(err=>{
            console.log(err);
        })

    })
})