var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/route", function (req, res, next) {
  res.render("index", { title: "Login System" });
});

router.get("/", function (req, res, next) {
  res.render("home.ejs");
});

module.exports = router;
