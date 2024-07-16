module.exports = (app) => {
    const Project = require("../controllers/project.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Create a new Project Details for Student
    router.post("/project/:userId", [authenticateRoute], Project.create);
  
    // Get Project details of student
    router.get("/project/user/:userId", [authenticateRoute], Project.findByUserId);
  
    // Get one project record by Id
    router.get("/project/:id", [authenticateRoute], Project.findById);
  
    // update project record by Id
    router.put("/project/:id", [authenticateRoute], Project.update);
  
  // delete project record by Id
    router.delete("/project/:id", [authenticateRoute], Project.delete);
    
    app.use("/resumeapi", router);
  };
  