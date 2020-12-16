const router = require("express").Router()

const emailController = require("../../controllers/email/emailController")

router.route("/user/:email").post(emailController.sendPasswordResetEmail)

router
  .route("/receive_new_password/:userId/:token")
  .post(emailController.receiveNewPassword)

  module.exports = router;