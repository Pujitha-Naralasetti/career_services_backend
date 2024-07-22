const db = require("../models");
const User = db.user;

exports.findProfileById = async (req, res) => {
  const userId = req.params.userId;

  await User.findAll({
    where: {
      id: userId,
    },
    attributes: {
      exclude: ["password", "salt"],
    },
    include: [
      { model: db.award, as: "awards", required: false },
      { model: db.certification, as: "certifications", required: false },
      { model: db.education, as: "education", required: false },
      { model: db.experience, as: "experiences", required: false },
      { model: db.project, as: "projects", required: false },
      { model: db.skills, as: "skills", required: false },
      { model: db.languages, as: "languages", required: false },
      { model: db.onlineProfile, as: "onlineProfiles", required: false },
    ],
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched Student details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the student details.",
        status: "Error",
      });
    });
};
