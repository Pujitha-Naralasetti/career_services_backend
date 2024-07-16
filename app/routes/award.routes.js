module.exports = (app) => {
    const Award = require("../controllers/award.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Create a new Award Details for Student
    router.post("/award/:userId", [authenticateRoute], Award.create);
  
    // Get Award details of student
    router.get("/award/user/:userId", [authenticateRoute], Award.findByUserId);
  
    // Get one award record by Id
    router.get("/award/:id", [authenticateRoute], Award.findById);
  
    // update award record by Id
    router.put("/award/:id", [authenticateRoute], Award.update);
  
  // delete award record by Id
    router.delete("/award/:id", [authenticateRoute], Award.delete);
    
    app.use("/resumeapi", router);
  };
  