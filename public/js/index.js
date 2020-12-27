$(document).ready(function () {
    $.get("/api/user_resume", function (data) {
      data.forEach(function (resume) {
        let resumeTile = "<div class='tile is-3 has-text-centered'><div class='tile is-parent'><article class='tile is-child notification is-info'><a class='resumeName' href ='/templateOne/"
          resumeTile += resume.id;
          resumeTile += "'>";
          resumeTile += resume.resumeName;
          resumeTile += "</a></p><figure class='image is-4by3'><img src='https://png.pngtree.com/png-clipart/20200709/original/pngtree-elegant-minimalistic-modern-vector-resume-or-cv-template-designed-on-a4-png-image_3528067.jpg'></figure>";
          resumeTile += "<div><button class='resumeEditButton' data-id='";
          resumeTile += resume.id;
          resumeTile += "'>Edit</button><button class='resumeDeleteButton' data-id='";
          resumeTile += resume.id;
          resumeTile += "'>Delete</button></div></article>";
          resumeTile += "</div></div>";
        $(".resumeTile").append(resumeTile);
        $('.resumeEditButton').on("click", function(){
          console.log("edit button clicked")
          const resumeId= $(this).data("id");
          console.log(resumeId);
          let url = '/'+ resumeId;
          console.log(url);
          window.location.replace(url);
        })
        $('.resumeDeleteButton').on("click", function(){
          const resumeId= $(this).data("id");
          let url = '/api/resumes/'+ resumeId;
          $.ajax({
            method: "DELETE",
            url: url
          })
          .then(function(){
            window.location.replace('/index');
          })
          .catch(err =>{
            console.log(err);
          })
        })
      });
    });
    $.get("/api/user_data", function(data){
        localStorage.setItem("userId", data.id);
    })
    
  });
