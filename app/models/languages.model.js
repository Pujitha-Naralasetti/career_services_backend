module.exports = (sequelize, Sequelize) => {
    const Languages = sequelize.define("languages", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return Languages;
  };
  