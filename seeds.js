// const { DataTypes } = require('sequelize/types');
const db = require('./models');

let seed = {
    addUser: function() {
        db.User.create({
            userName: "jgarcia",
            password: "Mickey19",
            email: "jgarcia@gmail.com",
            phone: 99999999,
        })
    },
    // addResume: function(){
    //     db.Resume.create({

    //         resumeName: "test",
    //         UserId: 1
    //     })
    // }
    addResume: function() {
        //this would come from the req.body in the server
        // const { userId, name, resumeBody, etc } = resumeObj
 
        db.Resume.create({
            userId: 1,
            resumeName: "secondName",
            objective: "To see if this works",
            school: "Georgia Tech",
            degree: "Bachelor of Science",
            startDate: "2012",
            endDate: "2016",
            program: "Business",
            isSchool: true,
            employer: "Google",
            title: "Software Engineer",
            jobStart: "2018",
            jobEnd: "2020",
            description: "Did some stuff, not super exciting",
            isEmployer: true,
            schoolB: "Georgia Tech",
            degreeB: "certificate",
            startDateB: "2020",
            endDateB: "2021",
            programB: "Full Stack Web Develompent",
            isSchoolB: true,
            project: "Resume Builder",
            summary: "Full Crud",
            isProject: true,
            // education: [
            //     {
            //         school: "Georgia Tech",
            //         degree: "Bachelor of Science",
            //         startDate: "2012",
            //         endDate: "2018",
            //         program: "Chemical Engineering"
            //     },
            //     {
            //         school: "Georgia Tech",
            //         degree: "Certificate",
            //         startDate: "2020",
            //         endDate: "2021",
            //         program: "Full Stack Web Development"
            //     }
            // ],
            // experience: [
            //     {
            //         employer: "GP",
            //         title: "engineer",
            //         startDate: "2018",
            //         endDate: "2020",
            //         description: "stuff"
            //     }
            // ],
            // projects: [
            //     {
            //         title: "free from all",
            //         description: "coding"
            //     }
            // ]
        });
    }
    
}

module.exports = seed;
