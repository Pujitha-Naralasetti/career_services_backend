module.exports = (sequelize, Sequelize) => {
  const Feedback = sequelize.define("feedback", {
    comments: {
      type: Sequelize.TEXT,
    },
    reply: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });
  return Feedback;
};
