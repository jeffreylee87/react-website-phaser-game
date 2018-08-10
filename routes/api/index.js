const router = require("express").Router();
const loginPage = require("./loginPage");

// Book routes
router.use("/login", loginPage);


module.exports = router;
