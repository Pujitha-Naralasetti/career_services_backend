module.exports = (app) => {
  
  var router = require("express").Router();
// Create a new User
router.post("/users/", User.create);
 
  app.use("/resumeapi", router);
};
