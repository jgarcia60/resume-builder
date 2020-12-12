module.exports = function(sequelize, DataTypes) {
    const Resume = sequelize.define("Resume", {
        resumeName: {
            type: DataTypes.STRING
        },
        objective: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        
    })

    Resume.associate = function (models) {
        Resume.belongsTo(models.User, {
            foreignKey: "id"
        });
    }
    return Resume;
}