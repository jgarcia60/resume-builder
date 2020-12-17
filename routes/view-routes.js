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

router.get("/index",isAuthenticated, function(req,res){
        res.render("index")
    });

router.get("/newResume", (req, res)=>{
    res.render("form")
})

module.exports = router;