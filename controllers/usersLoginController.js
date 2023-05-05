const express = require("express");
const Jwt = require("jsonwebtoken");
const JwtKey = "users";
const users = require("../models/usersModel");

async function userLoginController(req, resp) {
 
    let user = await users.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, JwtKey, (err, token) => {
        if (err) {
          resp.status(400).json({
            result: "something went wrong, Please try after some times",
          });
        }
        resp.status(200).json({ user, auth: token, userId: user._id });
      });
    } else {
      resp.status(400).json({ result: "Incorrect Data" });
    }

}

module.exports = userLoginController;