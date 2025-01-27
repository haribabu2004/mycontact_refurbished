const express = require("express");
const { registerUser, loginUser, currentUser} = require("../Controller/userController");
const validtoken = require("../Middleware/userHandleError");
const router = express.Router();

router.post ("/register",registerUser)

router.post("/login", loginUser);

router.get("/current",validtoken,currentUser);       

module.exports = router;
