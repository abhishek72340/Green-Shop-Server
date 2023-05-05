const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();

// **Products Get API**
router.get("/products/:key", productsController);

module.exports = router;
