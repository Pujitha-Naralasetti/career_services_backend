require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");

db.sequelize
  .sync({
    force: false,
  })
  .then(() => {
    db.role.findAll().then((data) => {
      if (data?.length === 0) {
        db.role
          .bulkCreate([
            {
              id: 1,
              name: "Student",
            },
            {
              id: 2,
              name: "Staff",
            },
          ])
          .then(() => {
            console.log("Records are inserted into table Language");
          })
          .catch((e) => {
            console.log("Trouble inserting records into Language table", e);
          });
      }
    });

  })
  .catch((e) => {
    console.log("Error creating table");
  });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.options("*", cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Resumes backend." });
});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/education.routes.js")(app);
require("./app/routes/certificate.routes.js")(app);
require("./app/routes/skills.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3201;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}
module.exports = app;
