const express = require("express");
const addCartsController = require("../controllers/cartController");
const deleteCartsController = require("../controllers/cartController");
const router = express.Router();

// **Cart-Items Post API**
router.post("/add-to-cart", addCartsController);

// ** Cart-Items Delete API
router.delete("/delete-cart/:_id", deleteCartsController);

module.exports = router;
