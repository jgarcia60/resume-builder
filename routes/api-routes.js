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
        const getId = await db.User.findOne({
            where:{
                email: loginEmail
            }
        })
        const userId = getId.dataValues.id;
        console.log(userId);

        // }).then(async function(data){
        //     console.log(data.dataValues);
        //     const loginId = data.dataValues.id;
        //     const allResume = await db.Resume.findAll({
        //         where: {
        //             userId : loginId
        //         }
        //     });
        //     const allResumeName = allResume.forEach(data =>{
        //         console.log(data.dataValues.resumeName);
        //         res.json(data.dataValues.resumeName);
        //     })
        //     allResumeName;
        // })
    })
    
}