const db = require("../models");
const Experience = db.experience;

exports.create = async (req, res) => {
  const userId = req.params.userId;
  await Experience.bulkCreate(req.body)
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully added experience details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
        status: "Error",
      });
    });
};

exports.findByUserId = async (req, res) => {
  const userId = req.params.userId;

  await Experience.findAll({
    where: {
      userId: userId,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched experience details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the experience details.",
        status: "Error",
      });
    });
};

exports.findById = async (req, res) => {
    const id = req.params.id;
  
    await Experience.findOne({
      where: {
        id: id,
      },
    })
      .then(async (data) => {
        res.status(200).send({
          data: data,
          message: "Successfully fetched experience details",
          status: "Success",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while fetching the experience details.",
          status: "Error",
        });
      });
  };


  exports.update = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Experience.destroy({
        where: {
          userId: id,
        },
      });
  
      const experienceDetails = await Experience.bulkCreate(req.body)
  
      res.send({
        data: experienceDetails,
        message: "Experience Details updated successfully",
        status: "Success",
      });
    } catch (error) {
      console.error("Error updating experience:", error);
      res.status(500).json({ message: "Error updating experience" });
    }
  };

  exports.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const experience = await Experience.findByPk(id);
      if (!experience) {
        res.send({
          message: `Experience with ID ${id} not found`,
          status: "Error",
        });
      } else {
        await experience.destroy({ isDeleted: true });
        res.send({
          message: "Experience deleted successfully",
          status: "Success",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error deleting experience",
        status: "Error",
      });
    }
  };
  