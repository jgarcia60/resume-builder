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
            console.log(req.user);
            res.json({
            userName: req.user.userName,
            email: req.user.email,
            id: req.user.id
          });
        }
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