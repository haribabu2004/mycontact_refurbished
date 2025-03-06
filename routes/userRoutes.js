const express = require("express");
const { registerUser, loginUser, currentUser} = require("../Controller/userController");
const router = express.Router();

router.post ("/register",registerUser)

router.post("/login", loginUser);

const validtoken = require("../Middleware/userHandleError");

router.get("/current",validtoken,currentUser);       

module.exports = router;
