const Models = require("../models/client");

class UsersController {
  async clientGetAllProducts(req, res) {
    let product = await Models.Products.find({});
    console.log(product, "all product");
    return res.render("home.ejs", { data: product });
  }

  async searchProduct(req, res) {
    let search = req.body.search;
    let productFromSearch = await Models.Products.find({
      title: search,
    });
    console.log(productFromSearch, "productSearch");
    return;
  }

  async foodView(req, res) {
    let food = await Models.Products.find({
      product_type: "food",
    });

    return res.render("food.ejs", { data: food });
  }

  async drinkView(req, res) {
    let drink = await Models.Products.find({
      product_type: "drink",
    });
    console.log(drink, "drink");
    return res.render("drink.ejs", { data: drink });
  }
}

module.exports = new UsersController();
