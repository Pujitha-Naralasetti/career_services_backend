const db = require("../models");
const Certificate = db.certification;

exports.create = async (req, res) => {
  const userId = req.params.userId;
  await Certificate.bulkCreate(req.body)
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully added certificate details",
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

  await Certificate.findAll({
    where: {
      userId: userId,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched certificate details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the certificate details.",
        status: "Error",
      });
    });
};

exports.findById = async (req, res) => {
    const id = req.params.id;
  
    await Certificate.findOne({
      where: {
        id: id,
      },
    })
      .then(async (data) => {
        res.status(200).send({
          data: data,
          message: "Successfully fetched certificate details",
          status: "Success",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while fetching the certificate details.",
          status: "Error",
        });
      });
  };


  exports.update = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Certificate.destroy({
        where: {
          userId: id,
        },
      });
  
      const certificateDetails = await Certificate.bulkCreate(req.body)
  
      res.send({
        data: certificateDetails,
        message: "Certificate Details updated successfully",
        status: "Success",
      });
    } catch (error) {
      console.error("Error updating certificate:", error);
      res.status(500).json({ message: "Error updating certificate" });
    }
  };

  exports.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const certificate = await Certificate.findByPk(id);
      if (!certificate) {
        res.send({
          message: `Certificate with ID ${id} not found`,
          status: "Error",
        });
      } else {
        await certificate.destroy({ isDeleted: true });
        res.send({
          message: "Certificate deleted successfully",
          status: "Success",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error deleting certificate",
        status: "Error",
      });
    }
  };
  