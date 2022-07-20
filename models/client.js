const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchemaUsers = new Schema({
  _id: { type: Schema.ObjectId },
  name: { type: String, index: true },
  image: { type: String },
  email: { type: String },
  phone_number: { type: String },
  password: { type: String },
  adddress: { type: String },
  role_Id: { type: String },
});

const SchemaProducts = new Schema({
  _id: { type: Schema.ObjectId },
  title: { type: String },
  price: { type: Number },
  amount: { type: Number },
  image: { type: String },
  description: { type: String },
  product_type: { type: String },
  createAt: { type: Date },
  updateAt: { type: Date },
});

const SchemaManagementProducts = new Schema({
  _id: { type: Schema.ObjectId },
  receiver: { type: String },
  email: { type: String },
  address: { type: Number },
  phone_number: { type: String },
  createAt: { type: Date },
});

const SchemaListItems = new Schema({
  _id: { type: Schema.ObjectId },
  nameOfProducts: { type: String },
  amount: { type: String },
  description: { type: Number },
  product_type: { type: String },
  image: { type: String },
});

const SchemaDetailProduct = new Schema({
  _id: { type: Schema.ObjectId },
  price: { type: String },
  image: { type: String },
  address: { type: Number },
  phone_number: { type: String },
  note: { type: String },
  createAt: { type: Date },
});

const Users = mongoose.model("users", SchemaUsers);
const ManagementProducts = mongoose.model(
  "managementProducts",
  SchemaManagementProducts
);
const Products = mongoose.model("products", SchemaProducts);
const ListItems = mongoose.model("listItems", SchemaUsers);
const DetailProducts = mongoose.model("detailProducts", SchemaUsers);

module.exports = {
  Users,
  ManagementProducts,
  Products,
  ListItems,
  DetailProducts,
};
