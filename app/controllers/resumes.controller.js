const { Op } = require("sequelize");
const db = require("../models");
const Resumes = db.resumes;

exports.create = async (req, res) => {
  const userId = req.params.userId;
  await Resumes.create(req.body)
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully added resumes details",
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

  await Resumes.findAll({
    where: {
      userId: userId,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched resumes details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the resumes details.",
        status: "Error",
      });
    });
};


exports.findById = async (req, res) => {
  const id = req.params.id;

  await Resumes.findOne({
    where: {
      id: id,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched resumes details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the resumes details.",
        status: "Error",
      });
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const resumeDetails = await Resumes.update(req.body, {
      where: {
        userId: id,
      },
    });

    res.send({
      data: resumeDetails,
      message: "Resumes Details updated successfully",
      status: "Success",
    });
  } catch (error) {
    console.error("Error updating resumes:", error);
    res.status(500).json({ message: "Error updating resumes" });
  }
};

exports.delete = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const resumes = await Resumes.findByPk(id);
    if (!resumes) {
      res.send({
        message: `Resumes with ID ${id} not found`,
        status: "Error",
      });
    } else {
      await resumes.destroy({ isDeleted: true });
      res.send({
        message: "Resumes deleted successfully",
        status: "Success",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error deleting resumes",
      status: "Error",
    });
  }
};
