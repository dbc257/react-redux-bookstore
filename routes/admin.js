const express = require("express");
const router = express.Router();

// /admin
router.get("/", (req, res) => {
  res.send("ADMIN ROOT");
});

// /admin/dashboard
router.get("/dashboard", (req, res) => {
  res.json({ message: "ADMIN DASHBOARD" });
});

module.exports = router;
