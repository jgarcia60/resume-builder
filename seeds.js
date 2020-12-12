// const { DataTypes } = require('sequelize/types');
const db = require('./models');

let seed = {
    addUser: function() {
        db.User.create({
            userName: "jgarcia",
            userPassword: "Mickey19",
            email: "jgarcia@gmail.com",
            phone: 99999999,
        })
    }
    
}

module.exports = seed;