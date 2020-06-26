let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// app.get("/api/books", (req, res) => {
//   let books = [{ bookId: 1, name: "Atomic Habits" }];
//   res.json(books);
// });

router.get("/", (req, res) => {
  models.Book.findAll().then((books) => {
    console.log(books);
    res.json(books);
  });
});

module.exports = router;
