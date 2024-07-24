module.exports = (sequelize, Sequelize) => {
  const Resumes = sequelize.define("resumes", {
    profileSummary: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    education: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    experience: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    skills: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    projects: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    awards: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    personalInfo: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    templateType: {
      type: Sequelize.INTEGER,
      allowNull: true,
    }
  });
  return Resumes;
};