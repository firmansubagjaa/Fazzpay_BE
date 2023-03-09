// import external
const express = require("express");
const router = express();

//import route
const authUserRoute = require("../routes/auth.user.route");
const userRoute = require('../routes/user.route');
const transferRoute = require('../routes/transfer.route');
const historyRoute = require('../routes/history.route');

//add get
router.get("/", (req, res) => {
  return res.send("server aman cuy");
});

//add params 
router.use("/auth", authUserRoute); //AUTH
router.use("/users", userRoute);
router.use("/transfer", transferRoute);
router.use("/history", historyRoute);

// router.use("/top-up", )

module.exports = router;