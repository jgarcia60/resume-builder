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

router.get('/:editResume', (req, res) => {
    res.render("formEdit");
})
//not sure what goes into the specific resume update form

module.exports = router;