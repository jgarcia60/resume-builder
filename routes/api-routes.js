var db = require("../models");

module.exports = function(app){
    app.post("/api/login", function(req,res){
        console.log(req.body);
        res.json(req.body);
    })
}