var db = require("../models");

module.exports = function(app){
    //verify the user (user authentication)
    app.post("/api/login", function(req,res){
        console.log(req.body);
        res.json(req.body);
    })

    //Get resumes for logged in user
    app.get("/api/login/:user", async function(req,res){
        const loginEmail = req.params.user;
        console.log(loginEmail);
        const getUserInfo = await db.User.findOne({
            where:{
                email: loginEmail
            }
        })
        const getUserId = getUserInfo.dataValues.id;
        const allResume = await db.Resume.findAll({
            where:{
                userId: getUserId
            }
        }).then(function(data){
            data.forEach(resume =>{
                console.log(resume.dataValues.resumeName);
                res.json(resume.dataValues.resumeName);
            })
        }).catch(err =>{
            console.log(err)
        })
        allResume;
    })
    
}