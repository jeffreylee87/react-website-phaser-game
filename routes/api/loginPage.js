const router = require("express").Router();
const controller= require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/")
  // .get(controller.findByUser)
  .post(controller.create);

  //Matches with "/api/login/auth"
  router.route("/auth")
  .post(controller.findByUser)


  //Matches with "/api/login/score"
  router.route("/score")
  .get(controller.findAll)
  .post(controller.addScore)

module.exports = router;
