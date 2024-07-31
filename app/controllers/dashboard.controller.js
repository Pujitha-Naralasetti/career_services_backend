const { Op } = require("sequelize");
const db = require("../models");
const Resumes = db.resumes;
const User = db.user;

exports.findDashboardDetails = async (req, res) => {
  const { userId, roleId } = req.body;

  try {
    const whereCondition = () => {
      if (roleId === 1) {
        return {
          userId: userId,
        };
      }
      return {
        userId: {
          [Op.ne]: null,
        },
      };
    };

    const resumeCount = await Resumes.count({
      where: whereCondition(),
    });

    const studentCount = await User.count({
      where: {
        roleId: roleId,
      },
    });
    const data =
      roleId === 1
        ? {
            resumeCount,
          }
        : {
            resumeCount,
            studentCount,
          };
    res.status(200).send({
      data: data,
      message: "Successfully fetched dashboard details",
      status: "Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        err.message ||
        "Some error occurred while fetching the dashboard details.",
      status: "Error",
    });
  }
};
