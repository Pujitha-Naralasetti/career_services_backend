module.exports = (app) => {
    const Dashbord = require("../controllers/dashboard.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Get Dashbord details
    router.post("/dashboard/getDashboardDetails", [authenticateRoute], Dashbord.findDashboardDetails);

    app.use("/resumeapi", router);
  };
  