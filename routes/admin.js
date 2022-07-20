var express = require("express");
var router = express.Router();

const AdminController = require("../controllers/admin_controller");

router.get("/add", function (req, res) {
  res.render("addnewitem.ejs");
});
router.post("/add", AdminController.createProduct);

router.get("/edit", AdminController.edit);
router.post("/editproduct", AdminController.editProduct);

router.get("/management", function (req, res) {
  res.render("management.ejs");
});

router.get("/listitem", AdminController.adminGetAllProducts);

module.exports = router;
