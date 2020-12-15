module.exports = function(sequelize, DataTypes) {
    const Education = sequelize.define("Education", {
        resumeId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "Resume",
                key: "id"
            }
        },
        school: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        degree: {
            type: DataTypes.STRING,
        },
        startDate: {
            type: DataTypes.STRING
        },
        endDate: {
            type: DataTypes.STRING,
        },
        program: {
            type: DataTypes.STRING,
        }
    });

    Education.associate = function (models) {
        Education.belongsTo(models.Resume, {
            foreignKey: "ResumeId",
        });
    };
    
    return Education;
}