const express = require("express");
const router = express.Router();
const userSignupController = require("../controllers/usersController");
const userLoginController = require("../controllers/usersLoginController");

// **User-Signup API with Token**
router.post("/usersignup", userSignupController);

//**Users Login API with Token Post API/:- If Data In Database Then user Would Be Login**/
router.post("/userlogin", userLoginController);

module.exports = router;
