var express = require('express');
<<<<<<< HEAD
const db = require("../models")
=======
const db = require('../models');
>>>>>>> 116a5ac228bd22f93a9186cb3411893a695251df
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