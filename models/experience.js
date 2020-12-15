module.exports = function(sequelize, DataTypes) {
    const Experience = sequelize.define("Experience", {
        resumeId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "Resume",
                key: "id"
            }
        },
        employer: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        title: {
            type: DataTypes.STRING,
        },
        startDate: {
            type: DataTypes.STRING
        },
        endDate: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        }
    });

    Experience.associate = function (models) {
        Experience.belongsTo(models.Resume, {
            foreignKey: "resumeId",
        });
    };
    
    return Experience;
}