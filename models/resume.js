module.exports = function(sequelize, DataTypes) {
    const Resume = sequelize.define("Resume", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "User",
                key: "id"
            }
        },
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
            foreignKey: "resumeid",
            targetKey: 'id'
        });

        Resume.hasMany(models.Experience, {
            onDelete: "cascade",
            foreignKey: "resumeid",
        });

        Resume.hasMany(models.Education, {
            onDelete: "cascade",
            foreignKey: "resumeid"
        });

        Resume.hasMany(models.Project, {
            onDelete: "cascade",
            foreignKey: "resumeid"
        });

    }

    return Resume;
}