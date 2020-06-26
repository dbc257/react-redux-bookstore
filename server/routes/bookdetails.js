let express = require("express");
let router = express.Router();
let models = require("../models");

// GET route to display all products
router.get("/", (req, res) => {
  res.render("bookdetails");
});

// POST route to add a product to Order Summary Page
router.post("/", (req, res) => {
  let detail_id = req.body.bookID;
  // console.log(detail_id);
  models.Book.findByPk(detail_id).then((book) => {
    let bookArray = [book.dataValues];
    //     console.log(book)
    //   );

    res.render("bookdetail", { bookDetails: bookArray });
  });
});

module.exports = router;
