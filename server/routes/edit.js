let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const cors = require("cors");
router.use(cors());

router.get("/:id", (req, res) => {
  let id = req.params.id;
  models.Book.findOne({
    where: {
      id: id,
    },
  }).then((response) => {
    res.send(response);
  });
});

router.post("/", (req, res) => {
  let id = req.body.id;
  let imageURL = req.body.imageURL;
  let title = req.body.title;
  let genre = req.body.genre;
  let publisher = req.body.publisher;
  let year = req.body.year;
  models.Book.update(
    {
      imageURL: imageURL,
      title: title,
      genre: genre,
      publisher: publisher,
      year: year,
    },
    {
      where: {
        id: id,
      },
    }
  ).then((response) => {
    res.send({ message: "Post updated!" });
  });
});

module.exports = router;
