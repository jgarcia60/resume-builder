module.exports = function(sequelize, DataTypes) {
    const Project = sequelize.define("Project", {
        resumeId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "Resume",
                key: "id",
            }
        },
        title: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        }
    });

    Project.associate = function (models) {
        Project.belongsTo(models.Resume, {
            foreignKey: "ResumeId",
        });
    };
    
    return Project;
}