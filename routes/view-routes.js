var express = require('express');
const db = require("../models")
var router = express.Router();

router.get("/login", function(req,res){
    res.render("login");    
});

router.get("/", (req, res)=>{
    db.User.findAll({}).then((result)=>{
        res.render("index", result)
    })
})

module.exports = router;