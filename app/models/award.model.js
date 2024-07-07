module.exports = (sequelize, Sequelize) => {
    const Award = sequelize.define("awards", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      awardingBody: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.TEXT,
      },
    });
    return Award
  };