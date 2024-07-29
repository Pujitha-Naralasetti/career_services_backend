module.exports = (app) => {
  const Resumes = require("../controllers/resumes.controller.js");
  const { authenticateRoute } = require("../authentication/authentication");
  var router = require("express").Router();

  // Create a new Resumes Details for Student
  router.post("/resumes/:userId", [authenticateRoute], Resumes.create);

  //Get resume templates
  router.get(
    "/resumes/getAllSampleTemplates",
    [authenticateRoute],
    Resumes.findTemplates
  );

  // Get Resumes details of student
  router.get(
    "/resumes/user/:userId",
    [authenticateRoute],
    Resumes.findByUserId
  );

  // Get Resumes details for staff
  router.get("/resumes", [authenticateRoute], Resumes.findAllForStaff);

  // Get one resumes record by Id
  router.get("/resumes/:id", [authenticateRoute], Resumes.findById);

  // update resumes record by Id
  router.put("/resumes/:id", [authenticateRoute], Resumes.update);

  // delete resumes record by Id
  router.delete("/resumes/:id", [authenticateRoute], Resumes.delete);

  app.use("/resumeapi", router);
};
