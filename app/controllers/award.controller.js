const db = require("../models");
const Award = db.award;

exports.create = async (req, res) => {
  const userId = req.params.userId;
  await Award.bulkCreate(req.body)
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully added award details",
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

  await Award.findAll({
    where: {
      userId: userId,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched award details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the award details.",
        status: "Error",
      });
    });
};

exports.findById = async (req, res) => {
    const id = req.params.id;
  
    await Award.findOne({
      where: {
        id: id,
      },
    })
      .then(async (data) => {
        res.status(200).send({
          data: data,
          message: "Successfully fetched award details",
          status: "Success",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while fetching the award details.",
          status: "Error",
        });
      });
  };


  exports.update = async (req, res) => {
    const id = req.params.id;
  
    try {
      await Award.destroy({
        where: {
          userId: id,
        },
      });
  
      const awardDetails = await Award.bulkCreate(req.body)
  
      res.send({
        data: awardDetails,
        message: "Award Details updated successfully",
        status: "Success",
      });
    } catch (error) {
      console.error("Error updating award:", error);
      res.status(500).json({ message: "Error updating award" });
    }
  };

  exports.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const award = await Award.findByPk(id);
      if (!award) {
        res.send({
          message: `Award with ID ${id} not found`,
          status: "Error",
        });
      } else {
        await award.destroy({ isDeleted: true });
        res.send({
          message: "Award deleted successfully",
          status: "Success",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error deleting award",
        status: "Error",
      });
    }
  };
  