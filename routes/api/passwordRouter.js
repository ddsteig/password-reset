const router = require("express").Router()
const emailController = require("../../controllers/emailController");

router
  .route("/receive_new_password/:userId/:token")
  .post(emailController.receiveNewPassword)

  module.exports = router;