const mongoose = require("mongoose");
const contactUs = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  address: String,
  message: String,
});

const contacts = mongoose.model("contacts", contactUs);
module.exports = contacts;
