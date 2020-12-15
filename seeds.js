// const { DataTypes } = require('sequelize/types');
const db = require('./models');

let seed = {
    addUser: function() {
        db.User.create({
            userName: "jgarcia",
            password: "Mickey19",
            email: "jgarcia@gmail.com",
            phone: 99999999,
        })
    },
    addResume: function(){
        db.Resume.create({
            resumeName: "test",
            UserId: 1
        })
    }
    
}

module.exports = seed;