let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", (req, res) => {
  models.Book.findAll({
    where: {
      genre: "Nonfiction",
    },
  }).then((nonfictionBooks) => {
    console.log(nonfictionBooks);
    res.json(nonfictionBooks);
  });
});

module.exports = router;

// router.get("/", (req, res) => {
//     models.Book.findAll().then((books) => {
//       console.log(books);
//       res.json(books);
//     });
//   });
