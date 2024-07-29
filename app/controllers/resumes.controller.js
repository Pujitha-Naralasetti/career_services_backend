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

exports.findAllForStaff = async (req, res) => {
  await Resumes.findAll({
    where: {
      userId: {
        [Op.ne]: null,
      },
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

exports.findTemplates = async (req, res) => {
  await Resumes.findAll({
    where: {
      userId: null,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched resumes templates",
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

exports.update = (req, res) => {
  const id = req.params.id;

  Resumes.update(req.body, {
    where: { id: id },
  })
    .then((number) => {
      if (number == 1) {
        res.send({
          status: "Success",
          message: "Resume Details updated successfully.",
        });
      } else {
        res.send({
          status: "Error",
          message: `Cannot update Resume with id = ${id}. Maybe Resume was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Resume with id =" + id,
      });
    });
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