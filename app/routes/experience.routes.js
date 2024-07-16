module.exports = (app) => {
    const Experience = require("../controllers/experience.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Create a new Experience Details for Student
    router.post("/experience/:userId", [authenticateRoute], Experience.create);
  
    // Get Experience details of student
    router.get("/experience/user/:userId", [authenticateRoute], Experience.findByUserId);
  
    // Get one experience record by Id
    router.get("/experience/:id", [authenticateRoute], Experience.findById);
  
    // update experience record by Id
    router.put("/experience/:id", [authenticateRoute], Experience.update);
  
  // delete experience record by Id
    router.delete("/experience/:id", [authenticateRoute], Experience.delete);
    
    app.use("/resumeapi", router);
  };
  