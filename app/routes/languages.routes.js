module.exports = (app) => {
    const Languages = require("../controllers/languages.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Create a new Languages Details for Student
    router.post("/languages/:userId", [authenticateRoute], Languages.create);
  
    // Get Languages details of student
    router.get("/languages/user/:userId", [authenticateRoute], Languages.findByUserId);
  
    // Get one languages record by Id
    router.get("/languages/:id", [authenticateRoute], Languages.findById);
  
    // update languages record by Id
    router.put("/languages/:id", [authenticateRoute], Languages.update);
  
  // delete languages record by Id
    router.delete("/languages/:id", [authenticateRoute], Languages.delete);
    
    app.use("/resumeapi", router);
  };
  