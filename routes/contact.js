const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const contacts = require("../models/contactModel");

// **ContactUs API**
router.post("/contactus", contactController);
module.exports = router;
