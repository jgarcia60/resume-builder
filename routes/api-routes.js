var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app){
    //verify the user (user authentication)
    app.post("/api/login",passport.authenticate("local") ,function(req,res){
        console.log(req.body);
        res.json(req.body);
    })
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
          res.json({});
        } else {
            res.json({
            email: req.user.email,
            id: req.user.id
          });
        }
      });
        

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
    });

    app.post("/api/newResume", (req, res) => {
        db.Resume.create(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    });


    // router.post("/api/:resumes", (req,res) => {
    //     db.Resume.create(req.body)
    //     .then((result) => {
    //         res.json(result);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // })

    //route to get all resumes for user
    app.get('/api/:userId', (req, res) => {
        db.User.findAll({
            where: {
                userId: req.params.id
            }
        }).then((result) => {
            return res.json(result);
        }).catch((err) => {
            console.log(err);
        })
    })
    
    //route to get specific resume Id
    app.get('/api/:resumeId', (req, res) => {
        db.Resume.findOne({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            return res.json(result);
        }).catch((err) => {
            console.log(err);
        })
    })

    //route to update resume
    app.put('/api/resumes/:id', (req, res) => {
        db.Resume.update(req.body, {
            where: {
                id: req.params.id,
            }
        }).then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        })
    })
}