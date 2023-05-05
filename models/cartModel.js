const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  url: String,
  name: String,
  category: String,
  price: Number,
  stock: Number,
});
const carts = mongoose.model("carts", cartSchema);
module.exports = carts;
