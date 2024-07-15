module.exports = (app) => {
    const Skills = require("../controllers/skills.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Create a new Skills Details for Student
    router.post("/skills/:userId", [authenticateRoute], Skills.create);
  
    // Get Skills details of student
    router.get("/skills/user/:userId", [authenticateRoute], Skills.findByUserId);
  
    // Get one skills record by Id
    router.get("/skills/:id", [authenticateRoute], Skills.findById);
  
    // update skills record by Id
    router.put("/skills/:id", [authenticateRoute], Skills.update);
  
  // delete skills record by Id
    router.delete("/skills/:id", [authenticateRoute], Skills.delete);
    
    app.use("/resumeapi", router);
  };
  