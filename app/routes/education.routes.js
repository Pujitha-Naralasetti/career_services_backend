module.exports = (app) => {
  const Education = require("../controllers/education.controller.js");
  const { authenticateRoute } = require("../authentication/authentication");
  var router = require("express").Router();

  // Create a new Education Details for Student
  router.post("/education/:userId", [authenticateRoute], Education.create);

  // Get Education details of student
  router.get("/education/user/:userId", [authenticateRoute], Education.findByUserId);

  // Get one education record by Id
  router.get("/education/:id", [authenticateRoute], Education.findById);

  // update education record by Id
  router.put("/education/:userId", [authenticateRoute], Education.update);

// delete education record by Id
  router.delete("/education/:id", [authenticateRoute], Education.delete);
  
  app.use("/resumeapi", router);
};
