const db = require("../models");
const OnlineProfile = db.onlineProfile;

exports.create = async (req, res) => {
  const userId = req.params.userId;
  await OnlineProfile.bulkCreate(req.body)
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully added onlineProfile details",
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

  await OnlineProfile.findAll({
    where: {
      userId: userId,
    },
  })
    .then(async (data) => {
      res.status(200).send({
        data: data,
        message: "Successfully fetched onlineProfile details",
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the onlineProfile details.",
        status: "Error",
      });
    });
};

exports.findById = async (req, res) => {
    const id = req.params.id;
  
    await OnlineProfile.findOne({
      where: {
        id: id,
      },
    })
      .then(async (data) => {
        res.status(200).send({
          data: data,
          message: "Successfully fetched onlineProfile details",
          status: "Success",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while fetching the onlineProfile details.",
          status: "Error",
        });
      });
  };


  exports.update = async (req, res) => {
    const id = req.params.id;
  
    try {
      await OnlineProfile.destroy({
        where: {
          userId: id,
        },
      });
  
      const onlineProfileDetails = await OnlineProfile.bulkCreate(req.body)
  
      res.send({
        data: onlineProfileDetails,
        message: "OnlineProfile Details updated successfully",
        status: "Success",
      });
    } catch (error) {
      console.error("Error updating onlineProfile:", error);
      res.status(500).json({ message: "Error updating onlineProfile" });
    }
  };

  exports.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const onlineProfile = await OnlineProfile.findByPk(id);
      if (!onlineProfile) {
        res.send({
          message: `OnlineProfile with ID ${id} not found`,
          status: "Error",
        });
      } else {
        await onlineProfile.destroy({ isDeleted: true });
        res.send({
          message: "OnlineProfile deleted successfully",
          status: "Success",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error deleting onlineProfile",
        status: "Error",
      });
    }
  };
  