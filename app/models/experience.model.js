module.exports = (sequelize, Sequelize) => {
  const Experience = sequelize.define("experience", {
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    designation: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isInternship: {
      type: Sequelize.BOOLEAN,
    },
    jobType: {
      type: Sequelize.STRING,
    },
    startDate: {
      type: Sequelize.DATE,
    },
    endDate: {
      type: Sequelize.DATE,
    },
  });
  return Experience;
};
