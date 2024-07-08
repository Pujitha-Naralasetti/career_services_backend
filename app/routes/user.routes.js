module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  var router = require("express").Router();
// Create a new User
router.post("/users/", User.create);

 // Update a User with id
 router.put("/users/:id", [authenticateRoute], User.update);
 
  app.use("/resumeapi", router);
};
