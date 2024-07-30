module.exports = (app) => {
  const Feedback = require("../controllers/feedback.controller.js");
  const { authenticateRoute } = require("../authentication/authentication");
  var router = require("express").Router();

  // generate feedback by AI
  router.post("/feedback/getFeedbackFromAI", [authenticateRoute], Feedback.askAI);

  app.use("/resumeapi", router);
};
