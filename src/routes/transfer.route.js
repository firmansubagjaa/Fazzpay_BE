const express = require("express");
const router = express();

const transferController = require("../controllers/transfer.controller");

router.post("/", transferController.add)

module.exports = router;