var express = require("express");
var router = express.Router();
const UsersController = require("../controllers/client_controller");

// user_controller
router.get("/", UsersController.clientGetAllProducts);
router.get("/food", UsersController.foodView);
router.get("/drink", UsersController.drinkView);
router.post("/", UsersController.searchProduct);

module.exports = router;
