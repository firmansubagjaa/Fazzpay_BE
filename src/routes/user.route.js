const express = require('express');
const router = express();
const userController = require('../controllers/user.controller');

// Endpoint user route
router.get("/", userController.getAllUsers);

// getuser route by id
router.get("/:id", userController.getById);

// Endpoint topup
router.post("/topup", userController.topUp);


module.exports = router;