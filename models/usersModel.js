// // **Users-Schema**
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // userId: String,

  name: String,

  mobile: Number,

  email: String,

  password: String,
});
const users = mongoose.model("users", userSchema);
module.exports = users;
