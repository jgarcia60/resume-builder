var express = require('express');
const db = require('../models');
var router = express.Router();

router.get("/", function(req,res){
    res.render("login");    
});

router.get("/index", (req, res)=>{
    db.User.findAll({}).then((result)=>{
        res.render("index", result)
    })
});

router.get("/newResume", (req, res)=>{
    res.render("form")
})

// uncomment this code if you would like to see how the template looks
// router.get("/template", (req, res)=>{
//     res.render("templateOne")
// })

module.exports = router;