module.exports = (app) => {
    const Certificate = require("../controllers/certificate.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Create a new Certificate Details for Student
    router.post("/certificate/:userId", [authenticateRoute], Certificate.create);
  
    // Get Certificate details of student
    router.get("/certificate/user/:userId", [authenticateRoute], Certificate.findByUserId);
  
    // Get one certificate record by Id
    router.get("/certificate/:id", [authenticateRoute], Certificate.findById);
  
    // update certificate record by Id
    router.put("/certificate/:id", [authenticateRoute], Certificate.update);
  
  // delete certificate record by Id
    router.delete("/certificate/:id", [authenticateRoute], Certificate.delete);
    
    app.use("/resumeapi", router);
  };
  