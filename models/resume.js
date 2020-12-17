// const Sequelize = require('Sequelize');
module.exports = function(sequelize, DataTypes) {
    const Resume = sequelize.define("Resume", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        resumeName: {
            type: DataTypes.STRING
        },
        objective: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        school: {
            type: DataTypes.STRING,

        },
        degree: {
            type: DataTypes.STRING,
        },
        startDate: {
            type: DataTypes.STRING,
        },
        endDate: {
            type: DataTypes.STRING,
        },
        program: {
            type: DataTypes.STRING,
        },
        isSchool: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        employer: {
            type: DataTypes.STRING,

        },
        title: {
            type: DataTypes.STRING,
        },
        jobStart: {
            type: DataTypes.STRING,
        },
        jobEnd: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        isEmployer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        schoolB: {
            type: DataTypes.STRING,

        },
        degreeB: {
            type: DataTypes.STRING,
        },
        startDateB: {
            type: DataTypes.STRING,
        },
        endDateB: {
            type: DataTypes.STRING,
        },
        programB: {
            type: DataTypes.STRING,
        },
        isSchoolB: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        empoyerB: {
            type: DataTypes.STRING,

        },
        titleB: {
            type: DataTypes.STRING,
        },
        jobStartB: {
            type: DataTypes.STRING,
        },
        jobEndB: {
            type: DataTypes.STRING,
        },
        descriptionB: {
            type: DataTypes.STRING,
        },
        isEmployerB: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        schoolC: {
            type: DataTypes.STRING,

        },
        degreeC: {
            type: DataTypes.STRING,
        },
        startDateC: {
            type: DataTypes.STRING,
        },
        endDateC: {
            type: DataTypes.STRING,
        },
        programC: {
            type: DataTypes.STRING,
        },
        isSchoolC: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        empoyerC: {
            type: DataTypes.STRING,

        },
        titleC: {
            type: DataTypes.STRING,
        },
        jobStartC: {
            type: DataTypes.STRING,
        },
        jobEndC: {
            type: DataTypes.STRING,
        },
        descriptionC: {
            type: DataTypes.STRING,
        },
        isEmployerC: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        project: {
            type: DataTypes.STRING,
        },
        summary: {
            type: DataTypes.TEXT,
        },
        isProject: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        projectB: {
            type: DataTypes.STRING,
        },
        summaryB: {
            type: DataTypes.TEXT,
        },
        isProjectB: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        projectC: {
            type: DataTypes.STRING,
        },
        summaryC: {
            type: DataTypes.TEXT,
        },
        isProjectC: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        skills: {
            type: DataTypes.TEXT,
        },
        awards: {
            type: DataTypes.TEXT,
        }
    })

    return Resume;
}