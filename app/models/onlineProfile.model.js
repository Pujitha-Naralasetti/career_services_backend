module.exports = (sequelize, Sequelize) => {
    const OnlineProfile = sequelize.define("onlineProfile", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return OnlineProfile;
  };
  