module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  var router = require("express").Router();
// Create a new User
router.post("/users/", User.create);

 // Retrieve a single User with id
 router.get("/users/:id", [authenticateRoute], User.findOne);

  // Update a User with id
  router.put("/users/:id", [authenticateRoute], User.update);

  // Delete a User with id
  router.delete("/users/:id", [authenticateRoute], User.delete);
 
  app.use("/resumeapi", router);
};
