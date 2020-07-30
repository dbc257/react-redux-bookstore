let express = require("express");
let router = express.Router();
let models = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const cors = require("cors");
router.use(cors());

router.post("/", (req, res) => {
  let id = req.body.id;
  models.Book.destroy({
    where: {
      id: id,
    },
  }).then((response) => {
    res.send({ message: "Post deleted!" });
  });
});

module.exports = router;
