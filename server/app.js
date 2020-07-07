const express = require("express");
const cors = require("cors");
const app = express();
var jwt = require("jsonwebtoken");
const models = require("./models");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded());

const auth = require("./middlewares/authMiddleware.js");

const adminRouter = require("./routes/admin");
const indexRouter = require("./routes/index");
const apibooksRouter = require("./routes/api-books");
const addbookRouter = require("./routes/add-book");
const editRouter = require("./routes/edit");
const deleteRouter = require("./routes/delete");

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const nonfictionRouter = require("./routes/nonfiction");
const fictionRouter = require("./routes/fiction");

const eCommerceDBRouter = require("./routes/api-books");

app.use("/api-books", eCommerceDBRouter);
app.use("/admin", auth, adminRouter);
app.use("/", indexRouter);

app.use("/api-books", apibooksRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/nonfiction", nonfictionRouter);
app.use("/fiction", fictionRouter);
app.use("/add-book", addbookRouter);
app.use("/edit", editRouter);
app.use("/delete", deleteRouter);
app.get("/api/books", (req, res) => {
  let books = [{ bookId: 1, name: "Atomic Habits" }];
  res.json(books);
});

//api/profile (protected resource)
// app.get("/api/profile", auth, (req, res) => {
//   res.json({ message: "Profile Resource" });
// });

// api/login POST (username, password)
app.post("/api/login", (req, res) => {
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
            const token = jwt.sign({ username: username }, "keyboard cat");
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

app.get("/guest", (req, res) => {
  let guest = [{ username: "David", password: "1234" }];
  res.json(guest);
});

app.get("/cart", (req, res) => {});
app.post("/cart", (req, res) => {
  let imageURL = req.body.imageURL;
  let title = req.body.title;
  let genre = req.body.genre;
  let publisher = req.body.publisher;
  let year = req.body.year;
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
// app.use(express.json())
// app.use(express.urlencoded());

// const auth = require("./middlewares/authMiddleware.js");

// const adminRouter = require("./routes/admin");
// const indexRouter = require("./routes/index");
// const apibooksRouter = require("./routes/api-books");
// const addbookRouter = require("./routes/add-book");
// const editRouter = require("./routes/edit");
// const deleteRouter = require("./routes/delete");

// const registerRouter = require("./routes/register");
// const loginRouter = require("./routes/login");
// const nonfictionRouter = require("./routes/nonfiction");
// const fictionRouter = require("./routes/fiction");

// app.use(express.static("js"));
// app.use(express.static("css"));

// var bcrypt = require("bcryptjs");

// if (persistedUser == null) {
//   res.send({ message: "Username not found!", success: false });
// } else {
//   if (bcrypt.compareSync(password, persistedUser.password)) {
//     const token = jwt.sign({ username: username }, "keyboard cat");
//     console.log(token);
//     res.send({
//       message: "Loggin Success!",
//       success: true,
//       token: token,
//     });
//   } else {
//     // user does not exists maybe username or password are wrong
//     res.send({ message: "Password is incorrect!", success: false });
//   }
//       }
//     });
// });
// });
