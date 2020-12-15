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
    addResume: function(){
        db.Resume.create({
            resumeName: "firstResume",
            objective: "To get a job"
        })
    },
    addExperience: function(){
        db.Experience.create({
            employer: "GP",
            title: "engineer",
            startDate: "12/1/2018",
            endDate: "12/21/20",
            description: "did cool stuff",
        })
    },
    addEducation: function(){
        db.Education.create({
            school: "Georgia Tech",
            degree: "BS",
            startDate: "2012",
            endDate: "2018",
            program: "ChBE",
        })
    },
    addProject: function(){
        db.Project.create({
            title: "Free From All",
            description: "coded awesomely"
        })
    }
    
}

module.exports = seed;