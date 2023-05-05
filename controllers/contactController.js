const express = require("express");
const contacts = require("../models/contactModel");

async function contactController(req, resp) {
  let data = new contacts(req.body);
  let message = await data.save();
  resp.status(200).json(message);
}
module.exports = contactController;
