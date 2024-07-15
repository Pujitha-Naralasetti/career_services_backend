module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("skills", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Role;
};
