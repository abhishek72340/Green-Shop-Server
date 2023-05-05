const express = require("express");
const Jwt = require("jsonwebtoken");
const JwtKey = "users";
const users = require("../models/usersModel");

// **user SignUp API**
async function userSignupController(req, resp) {
  let user = new users(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, JwtKey, (err, token) => {
    if (err) {
      resp.status(400).json({
        result: "something went wrong, Please try after some times",
      });
    }
    resp.status(200).json({ result, auth: token, userId: user._id });
  });
}
module.exports = userSignupController;


