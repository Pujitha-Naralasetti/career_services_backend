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
      type: Sequelize.STRING,
    },
    endDate: {
      type: Sequelize.STRING,
    },
    gpa: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
  });
  return Education;
};
