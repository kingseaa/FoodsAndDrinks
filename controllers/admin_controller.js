const Models = require("../models/client");

class AdminController {
  async createProduct(req, res) {
    let data = req.body;
    console.log(data);
    if (!req.body) {
      return res.status(400).send({ message: "Không được để trống" });
    }
    let ObjectId = function () {
      let timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
      return (
        timestamp +
        "xxxxxxxxxxxxxxxx"
          .replace(/[x]/g, function () {
            return ((Math.random() * 16) | 0).toString(16);
          })
          .toLowerCase()
      );
    };
    const product = new Models.Products({
      _id: ObjectId(),
      title: data.tensanpham,
      price: data.giatien,
      amount: data.soluongsanpham,
      description: data.motasanpham,
      image: data.hinhanh,
      product_type: data.loaisanpham,
    });
    product.save(product);
    return res.redirect("/admin/pages/add");
  }

  async adminGetAllProducts(req, res) {
    let product = await Models.Products.find({});
    console.log(product, "admin product");
    return res.render("listitem.ejs", { data: product });
  }

  async edit(req, res) {
    let data = await Models.Products.findById(req.query.id);
    console.log(data, "editItem");
    res.render("../views/editItem.ejs", { existData: data });
  }

  async editProduct(req, res) {
    if (!req.body) {
      return res.status(400).send({ message: "dữ liệu để cập nhật bị trống" });
    }
    const id = req.body._id;
    let data = req.body;
    let product = await Models.Products.findOne({ where: { id: id } });
    if (product) {
      product.title = data.tensanpham;
      product.price = data.giatien;
      product.amount = data.soluongsanpham;
      product.description = data.motasanpham;
      product.product_type = data.loaisanpham;
      await product.save();
      let products = await Models.Products.find({});
      return res.render("listitem.ejs", { data: products });
    } else {
      return;
    }
  }
}

module.exports = new AdminController();
