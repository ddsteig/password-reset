const router = require("express").Router()
const emailController = require("../controllers/emailController");
const userController = require("../controllers/userController");

router.route("/user/:email").get(userController.getOneUser).post(emailController.sendPasswordResetEmail)

router
  .route("/receive_new_password/:userId/:token")
  .post(emailController.receiveNewPassword)

  module.exports = router;