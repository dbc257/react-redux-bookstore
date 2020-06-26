let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.post("/", (req, res) => {
  let imageURL = req.body.imageURLTextBox;
  let title = req.body.titleTextBox;
  let genre = req.body.genreTextBox;
  let publisher = req.body.publisherTextBox;
  let year = req.body.yearTextBox;

  models.Book.create({
    imageURL: imageURL,
    title: title,
    genre: genre,
    publisher: publisher,
    year: year,
  })
    // console.log(product);
    .then((response) => {
      if (response) {
        res.send({ message: "Post was successful!" });
      } else {
        res.send({ message: "Error: Post was unsuccessful!" });
      }
    });
});

module.exports = router;
