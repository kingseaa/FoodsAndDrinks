var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/route", function (req, res, next) {
  res.render("index", { title: "Login System" });
});

router.get("/", function (req, res, next) {
  res.render("home.ejs");
});

router.post("/add", function (req, res) {
  console.log(req.body);
});

// router.get("/admin", function (req, res) {
//   res.render("admin.ejs");
// });

router.get("/add", function (req, res) {
  res.render("addnewitem.ejs");
});

router.get("/management", function (req, res) {
  res.render("management.ejs");
});

router.get("/listitem", function (req, res) {
  res.render("listitem.ejs");
});

module.exports = router;
