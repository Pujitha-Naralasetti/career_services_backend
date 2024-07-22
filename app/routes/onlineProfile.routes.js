module.exports = (app) => {
    const OnlineProfile = require("../controllers/onlineProfile.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Create a new OnlineProfile Details for Student
    router.post("/onlineProfile/:userId", [authenticateRoute], OnlineProfile.create);
  
    // Get OnlineProfile details of student
    router.get("/onlineProfile/user/:userId", [authenticateRoute], OnlineProfile.findByUserId);
  
    // Get one onlineProfile record by Id
    router.get("/onlineProfile/:id", [authenticateRoute], OnlineProfile.findById);
  
    // update onlineProfile record by Id
    router.put("/onlineProfile/:id", [authenticateRoute], OnlineProfile.update);
  
  // delete onlineProfile record by Id
    router.delete("/onlineProfile/:id", [authenticateRoute], OnlineProfile.delete);
    
    app.use("/resumeapi", router);
  };
  