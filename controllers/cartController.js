const express = require("express");
const carts = require("../models/cartModel");

// **Add Cart Controller**
async function addCartsController(req, resp) {
  let data = new carts(req.body);
  let result = await data.save();
  resp.status(200).json(result);
}
module.exports = addCartsController;

// **Delete Cart Controller**
async function deleteCartsController(req, resp) {
  let data = await carts.deleteOne(req.params);
  resp.status(200).json(data);
}
module.exports = deleteCartsController;
