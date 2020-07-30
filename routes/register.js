let express = require("express");
let router = express.Router();
let models = require("../models");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// POST route to register a new user account
router.post("/", (req, res) => {
  let username = req.body.username;
  let password = bcrypt.hashSync(req.body.password, 10);
  models.User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      res.send({ message: "Error: Username has already been used!" });
    } else {
      models.User.create({ username: username, password: password }).then(
        (user) => {
          if (user) {
            res.send({ message: "Registration complete!" });
          } else {
            res.send({ message: "Error: Unable to create user!" });
          }
        }
      );
    }
  });
});

module.exports = router;
