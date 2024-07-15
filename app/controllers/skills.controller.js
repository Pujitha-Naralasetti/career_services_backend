const db = require("../models");
const Skills = db.skills;

exports.create = async (req, res) => {
  const userId = req.params.userId;
  await Skills.bulkCreate(req.body)
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully added skills details",
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

  await Skills.findAll({
    where: {
      userId: userId,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched skills details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the skills details.",
        status: "Error",
      });
    });
};

exports.findById = async (req, res) => {
    const id = req.params.id;
  
    await Skills.findOne({
      where: {
        id: id,
      },
    })
      .then(async (data) => {
        res.status(200).send({
          data: data,
          message: "Successfully fetched skills details",
          status: "Success",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while fetching the skills details.",
          status: "Error",
        });
      });
  };


  exports.update = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Skills.destroy({
        where: {
          userId: id,
        },
      });
  
      const skillDetails = await Skills.bulkCreate(req.body)
  
      res.send({
        data: skillDetails,
        message: "Skills Details updated successfully",
        status: "Success",
      });
    } catch (error) {
      console.error("Error updating skills:", error);
      res.status(500).json({ message: "Error updating skills" });
    }
  };

  exports.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const skills = await Skills.findByPk(id);
      if (!skills) {
        res.send({
          message: `Skills with ID ${id} not found`,
          status: "Error",
        });
      } else {
        await skills.destroy({ isDeleted: true });
        res.send({
          message: "Skills deleted successfully",
          status: "Success",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error deleting skills",
        status: "Error",
      });
    }
  };
  