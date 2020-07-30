let express = require("express");
let router = express.Router();
let models = require("../models");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// POST route to register a new user account
router.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  models.User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user == null) {
      res.send({ message: "Username not found!", success: false });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        res.send({ message: "Login successful!", success: true });
      } else {
        res.send({ message: "Password is incorrect!", success: false });
      }
    }
  });
});

module.exports = router;
