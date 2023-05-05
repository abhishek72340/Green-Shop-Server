const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  url: String,
  name: String,
  category: String,
  price: Number,
  stock: Number,
});

const microgreens = mongoose.model("microgreens", productsSchema);
module.exports = microgreens;
