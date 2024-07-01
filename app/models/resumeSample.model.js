module.exports = (sequelize, Sequelize) => {
  const ResumeSample = sequelize.define("resume_samples", {
    content: {
      type: Sequelize.TEXT,
    },
  });
  return ResumeSample;
};
