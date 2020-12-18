var express = require('express');
const db = require('../models');
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get("/", function(req,res){   
    if(req.user){
        res.render('index');
    }
    res.render("login");
});
router.get("/signin", function(req,res){
    res.render("signin");
})

router.get("/index",isAuthenticated, function(req,res){
        res.render("index", req.user)
    });

router.get("/newResume", (req, res)=>{
    res.render("form")
})

//uncomment this code to view the template
// router.get("/template", (req, res)=>{
//     res.render("templateOne")
// })

router.get('/:editResume', (req, res) => {
    res.render("formEdit");
})
//not sure what goes into the specific resume update form

router.get('/templateTwo', (req, res) => {
    res.render('templateTwo');
})

module.exports = router;