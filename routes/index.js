let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", (req, res) => {
  models.Book.findAll().then((books) => {
    res.send(books);
  });
});

module.exports = router;

// let express = require("express");
// let router = express.Router();
// let models = require("../models");
// var bcrypt = require("bcryptjs");
// const bodyParser = require("body-parser");
// router.use(bodyParser.json());

// // POST route to login username and password
// router.post("/", (req, res) => {
//   console.log(req.body);
//   let username = req.body.username;
//   let password = req.body.password;

//   models.User.findOne({
//     where: {
//       username: username,
//     },
//   }).then((user) => {
//     if (user == null) {
//       res.send({ messageError: "Username not found!" });
//     } else {
//       if (bcrypt.compareSync(password, user.password)) {
//         res.send(user);
//       } else {
//         res.send({ messageError: "Password is incorrect!" });
//       }
//     }
//   });
// });

// module.exports = router;
