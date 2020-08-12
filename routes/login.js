let express = require("express");
let router = express.Router();
let models = require("../models");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const auth = require("../middlewares/authMiddleware.js");

router.get("/guest", (req, res) => {
  let guest = [
    {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
    },
  ];
  res.json(guest);
});

router.get("/user", (req, res) => {
  res.send("USER ROOT");
});

// api/login POST (username, password)
router.post("/user", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let userArray = [];
  models.User.findOne({
    where: {
      username: username,
    },
  })
    .then((user) => {
      userArray.push(user);
    })
    .then(() => {
      // find if the username and password exists in the users array
      const persistedUser = userArray.find((user) => {
        return user.username == username;
      });
      if (persistedUser == null) {
        res.json({ message: "Username not found!", success: false });
      } else {
        if (persistedUser) {
          if (bcrypt.compareSync(password, persistedUser.password)) {
            const token = jwt.sign(
              { username: username },
              process.env.JWT_PASSWORD
            );
            console.log(token);
            console.log("true");
            res.json({
              message: "Loggin Success!",
              success: true,
              token: token,
            });
          }
        } else {
          console.log("false");
          // user does not exists maybe username or password are wrong
          res.json({ message: "Oops, there was an error!", success: false });
        }
      }
    });
});

// /admin
router.get("/admin", (req, res) => {
  res.send("ADMIN ROOT");
});

router.post("/admin", auth, (req, res) => {
  let username = req.body.adminUsername;
  let password = req.body.adminPassword;
  let userArray = [];
  models.User.findOne({
    where: {
      username: username,
    },
  })
    .then((user) => {
      userArray.push(user);
    })
    .then(() => {
      // find if the username and password exists in the users array
      const persistedUser = userArray.find((user) => {
        return user.username == username;
      });
      if (persistedUser == null) {
        res.json({ message: "Username not found!", success: false });
      } else {
        if (persistedUser) {
          if (bcrypt.compareSync(password, persistedUser.password)) {
            const token = jwt.sign(
              { username: username },
              process.env.JWT_PASSWORD
            );
            res.json({
              message: "Loggin Success!",
              success: true,
              token: token,
            });
          }
        } else {
          res.json({ message: "Oops, there was an error!", success: false });
        }
      }
    });
});

module.exports = router;

// POST route to register a new user account
// router.post("/", (req, res) => {
//   let username = req.body.username;
//   let password = req.body.password;
//   models.User.findOne({
//     where: {
//       username: username,
//     },
//   }).then((user) => {
//     if (user == null) {
//       res.send({ message: "Username not found!", success: false });
//     } else {
//       if (bcrypt.compareSync(password, user.password)) {
//         res.send({ message: "Login successful!", success: true });
//       } else {
//         res.send({ message: "Password is incorrect!", success: false });
//       }
//     }
//   });
// });
