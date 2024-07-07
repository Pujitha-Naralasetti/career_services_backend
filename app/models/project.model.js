module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("projects", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      link: {
        type: Sequelize.STRING,
      },
    });
    return Project;
  };