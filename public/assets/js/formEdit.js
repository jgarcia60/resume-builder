

$(document).ready(function() {
    $("#cancel").on("click", function() {
        window.location.replace('/index');
    })
    
    //save as new resume, but maybe for "future development"
    
    //update current
    $("#updateButton").on("click", function() {
        const resumeId = $(this).data("id");
        const resumeFileName = $("#resumeName").val().trim();
        const name = $('.name').val();
        const email = $('.email').val();
        const phoneNumber = $('.phoneNumber').val();
        const objectiveStatement = $("#objective").val();
        const skills= $("#skills").val();
        const awards = $("#awards").val();
    
        if (resumeName == "") {
            alert("Please enter a valid file name for your resume");
        };
    
        //may need to do this in the index page and push to local storage
        // const url = Window.location.href;
        //     let backwardsUser = '';
        //     for (let i = url.length; i >= 0; i--) {
        //         if (url.charAt(i) == '/' || url.charAt(i) == '\''){
        //             break;
        //         }
        //         backwardsUser += url.charAt(i);
        //     }
        //     let userId = '';
        //     for(let i = backwardsUser.length; i >= 0; i) {
        //         userId += backwardsUser.charAt(i);
        //     }
            const school = $(".school").val();
           const degree = $(".degree").val();
           const startDate = $(".startDate").val();
           const endDate = $(".endDate").val();
           const program = $(".program").val();
           const isSchool = $(".school").val() === "" || $(".school").val() === undefined ? false: true;
    
           const schoolB = $("#schoolB").val();
           const degreeB = $("#degreeB").val();
           const startDateB = $("#startDateB").val();
           const endDateB = $("#endDateB").val();
           const programB = $("#programB").val();
           const isSchoolB = $("#schoolB").val() === "" || $("#schoolB").val() === undefined ? false: true;
    
           const schoolC = $("#schoolC").val();
           const degreeC = $("#degreeC").val();
           const startDateC = $("#startDateC").val();
           const endDateC = $("#endDateC").val();
           const programC = $("#programC").val();
           const isSchoolC = $("#schoolC").val() === "" || $("#schoolC").val() === undefined ? false: true;
    
           const employer = $(".employer").val();
           const title = $(".jobTitle").val();
           const jobStart = $(".jobStart").val();
           const jobEnd = $(".jobEnd").val();
           const description = $(".description").val();
           const isEmployer = $(".employer").val() === "" || $(".employer").val() === undefined ? false: true;
    
           const employerB = $("#employerB").val();
           const titleB = $("#titleB").val();
           const jobStartB = $("#jobStartB").val();
           const jobEndB = $("#jobEndB").val();
           const descriptionB = $("#descriptionB").val();
           const isEmployerB = $("#employerB").val() === "" || $("#employerB").val() === undefined ? false: true;
    
           const employerC = $("#employerC").val();
           const titleC = $("#titleC").val();
           const jobStartC = $("#jobStartC").val();
           const jobEndC = $("#jobEndC").val();
           const descriptionC = $("#descriptionC").val();
           const isEmployerC = $("#employerC").val() === "" || $("#employerC").val() === undefined ? false: true;
    
           const project = $("#project").val();
           const summary = $(".summary").val();
           const isProject = $("#project").val() === "" || $("#project").val() === undefined ? false: true;
    
           const projectB = $("#projectB").val();
           const summaryB = $("#summaryB").val();
           const isProjectB = $("#projectB").val() === "" || $("#projectB").val() === undefined? false: true;
    
           const projectC = $("#projectC").val();
           const summaryC = $("#summaryC").val();
           const isProjectC = $("#projectC").val() === "" || $("#projectC").val() === undefined ? false: true;
    
        const userId = JSON.parse(localStorage.getItem("userId"));
            
    
        const resume = {
            resumeName: resumeFileName,
            objective: objectiveStatement,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            school: school,
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            program: program,
            isSchool: isSchool,
            schoolB: schoolB,
            degreeB: degreeB,
            startDateB: startDateB,
            endDateB: endDateB,
            programB: programB,
            isSchoolB: isSchoolB,
            schoolC: schoolC,
            degreeC: degreeC,
            startDateC: startDateC,
            endDateC: endDateC,
            programC: programC,
            isSchoolC: isSchoolC,
            
    
            employer: employer,
            title: title,
            jobStart: jobStart,
            jobEnd: jobEnd,
            description: description,
            isEmployer: isEmployer,
            employerB: employerB,
            titleB: titleB,
            jobStartB: jobStartB,
            jobEndB: jobEndB,
            descriptionB: descriptionB,
            isEmployerB: isEmployerB,
            employerC: employerC,
            titleC: titleC,
            jobStartC: jobStartC,
            jobEndC: jobEndC,
            descriptionC: descriptionC,
            isEmployerC: isEmployerC,
    
            project: project,
            summary: summary,
            isProject: isProject,
            projectB: projectB,
            summaryB: summaryB,
            isProjectB: isProjectB,
            projectC: projectC,
            summaryC: summaryC,
            isProjectC: isProjectC,
    
            skills: skills,
            awards: awards,
        }
            console.log(resume);
    
        $.ajax({
            method: "PUT",
            url: `api/resumes/${resumeId}`,
            data: resume
        }).then(function(res) {
            res.send(res);
            //redirect to list?
        });
        window.location.replace('/index');
    })
    
    //go back/cancel
});
