const express = require("express");
const router = express.Router();

// /admin
router.get("/login", (req, res) => {
  res.send("ADMIN ROOT");
});

router.post("/login", (req, res) => {
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
