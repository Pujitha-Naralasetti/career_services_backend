module.exports = (sequelize, Sequelize) => {
  const Certification = sequelize.define("certifications", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    issuedBy: {
      type: Sequelize.STRING,
    },
    grade: {
      type: Sequelize.STRING,
    },
    startDate: {
      type: Sequelize.DATE,
    },
    endDate: {
      type: Sequelize.DATE,
    },
  });

  return Certification;
};
