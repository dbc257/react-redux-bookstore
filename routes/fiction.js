let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", (req, res) => {
  models.Book.findAll({
    where: {
      genre: "Fiction",
    },
  }).then((fictionBooks) => {
    console.log(fictionBooks);
    res.json(fictionBooks);
  });
});

module.exports = router;
