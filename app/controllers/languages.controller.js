const db = require("../models");
const Languages = db.languages;

exports.create = async (req, res) => {
  const userId = req.params.userId;
  await Languages.bulkCreate(req.body)
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully added languages details",
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

  await Languages.findAll({
    where: {
      userId: userId,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched languages details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the languages details.",
        status: "Error",
      });
    });
};

exports.findById = async (req, res) => {
    const id = req.params.id;
  
    await Languages.findOne({
      where: {
        id: id,
      },
    })
      .then(async (data) => {
        res.status(200).send({
          data: data,
          message: "Successfully fetched languages details",
          status: "Success",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while fetching the languages details.",
          status: "Error",
        });
      });
  };


  exports.update = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Languages.destroy({
        where: {
          userId: id,
        },
      });
  
      const languageDetails = await Languages.bulkCreate(req.body)
  
      res.send({
        data: languageDetails,
        message: "Languages Details updated successfully",
        status: "Success",
      });
    } catch (error) {
      console.error("Error updating languages:", error);
      res.status(500).json({ message: "Error updating languages" });
    }
  };

  exports.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const languages = await Languages.findByPk(id);
      if (!languages) {
        res.send({
          message: `Languages with ID ${id} not found`,
          status: "Error",
        });
      } else {
        await languages.destroy({ isDeleted: true });
        res.send({
          message: "Languages deleted successfully",
          status: "Success",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error deleting languages",
        status: "Error",
      });
    }
  };
  