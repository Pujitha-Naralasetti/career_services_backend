module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define("education", {
      institutionName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      degree: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      course: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      gpa: {
        type: Sequelize.FLOAT,
      },
    });
    return Education;
  };