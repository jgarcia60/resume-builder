module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return User;
}