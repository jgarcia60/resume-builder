$(document).ready(function () {
    //need to figure out how to put user email to the route
    $.get("/api/user_resume", function (data) {
      data.forEach(function (resume) {
        let resumeTile = "<div class='tile is-3 has-text-centered'><div class='tile is-parent'><article class='tile is-child notification is-info'><a class='resumeName' href ='/templateOne/"
          resumeTile += resume.id;
          resumeTile += "'>";
          resumeTile += resume.resumeName;
          resumeTile += "</p><figure class='image is-4by3'><img src='https://png.pngtree.com/png-clipart/20200709/original/pngtree-elegant-minimalistic-modern-vector-resume-or-cv-template-designed-on-a4-png-image_3528067.jpg'></figure><div><button>edit</button></div></article>";
          resumeTile += "</div></div>";
        $(".resumeTile").append(resumeTile);
      });
    });
    $.get("/api/user_data", function(data){
        localStorage.setItem("userId", data.id);
    })
  });
