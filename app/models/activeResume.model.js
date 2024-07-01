module.exports = (sequelize, Sequelize) => {
  const ActiveResume = sequelize.define("active_resumes", {
    ratings: {
      type: Sequelize.INTEGER,
    },
  });
  return ActiveResume;
};
