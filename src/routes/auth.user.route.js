// import
const express = require("express"); // express.js
const router = express(); // express.js

//import controller
const authUserController = require("../controllers/auth.user.controler");

// endpoint
router.post("/register-user", authUserController.register);
router.post('/login', authUserController.login);

module.exports = router;