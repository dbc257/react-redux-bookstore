const express = require("express");
const cors = require("cors");
const app = express();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const models = require("./models");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

const auth = require("./middlewares/authMiddleware.js");

// const adminRouter = require("./routes/admin");
const indexRouter = require("./routes/index");
const apiBooksRouter = require("./routes/api-books");
const addBookRouter = require("./routes/add-book");
const editRouter = require("./routes/edit");
const deleteRouter = require("./routes/delete");

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const nonfictionRouter = require("./routes/nonfiction");
const fictionRouter = require("./routes/fiction");

// app.use("/admin", auth, adminRouter);
app.use("/", indexRouter);
app.use("/api-books", apiBooksRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/nonfiction", nonfictionRouter);
app.use("/fiction", fictionRouter);
app.use("/add-book", addBookRouter);
app.use("/edit", editRouter);
app.use("/delete", deleteRouter);

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
