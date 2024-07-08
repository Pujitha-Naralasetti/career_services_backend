module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  var router = require("express").Router();
// Create a new User
router.post("/users/", User.create);

 // Update a User with id
 router.put("/users/:id", [authenticateRoute], User.update);
 
 // Retrieve a single User with id
 router.get("/users/:id", [authenticateRoute], User.findOne);
 
  app.use("/resumeapi", router);
};
