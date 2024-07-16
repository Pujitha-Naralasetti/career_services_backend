module.exports = (app) => {
    const Student = require("../controllers/student.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  

    // Retrieve all Users
    router.get("/student/profile/:userId", [authenticateRoute], Student.findProfileById);
  
  
    app.use("/resumeapi", router);
  };
  