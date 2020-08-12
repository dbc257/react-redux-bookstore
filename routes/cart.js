let express = require("express");
let router = express.Router();
let models = require("../models");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

app.post("/", (req, res) => {
  let imageURL = req.body.imageURL;
  let title = req.body.title;
  let genre = req.body.genre;
  let publisher = req.body.publisher;
  let year = req.body.year;
});

module.exports = router;
