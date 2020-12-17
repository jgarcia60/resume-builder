$(document).ready(function(){
    $("form.signIn").on("submit", function(event){
        event.preventDefault();
        const userName = $(".userName").val();
        const phoneNumber = $('.phoneNumber').val();
        const userEmail = $(".userEmail").val();
        const userPassword = $('.userPassword').val();
        userSignIn(userName, userPassword, userEmail, phoneNumber);
        $(".userName").val("");
        $(".phoneNumber").val("");
        $(".userEmail").val("");
        $(".userPassword").val("");
    })
    function userSignIn(userName, userPassword, userEmail, phoneNumber){
        $.post("/api/signin", {
            userName : userName,
            password: userPassword,
            email: userEmail,
            phone: phoneNumber
        })
        .then(function(data){
            console.log(data)
            window.location.replace("/");
        })
        .catch(err=>{
            console.log(err)
        });
    }
})