const db = require("../models");
const Education = db.education;

exports.create = async (req, res) => {
  const userId = req.params.userId;
  await Education.bulkCreate(req.body)
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully added education details",
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

  await Education.findAll({
    where: {
      userId: userId,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched education details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the education details.",
        status: "Error",
      });
    });
};

exports.findById = async (req, res) => {
  const id = req.params.id;

  await Education.findOne({
    where: {
      id: id,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched education details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the education details.",
        status: "Error",
      });
    });
};

exports.update = async (req, res) => {
  const userId = req.params.userId;

  try {
    await Education.destroy({
      where: {
        userId: userId,
      },
    });

    const educationDetails = await Education.bulkCreate(req.body)

    res.send({
      data: educationDetails,
      message: "Education Details updated successfully",
      status: "Success",
    });
  } catch (error) {
    console.error("Error updating education:", error);
    res.status(500).json({ message: "Error updating education" });
  }
};

exports.delete = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const education = await Education.findByPk(id);
    if (!education) {
      res.send({
        message: `Education with ID ${id} not found`,
        status: "Error",
      });
    } else {
      await education.destroy({ isDeleted: true });
      res.send({
        message: "Education deleted successfully",
        status: "Success",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error deleting education",
      status: "Error",
    });
  }
};
