const router = require("express").Router()
const emailController = require("../../controllers/emailController");

router
  .route("/:userId/:token")
  .post(emailController.receiveNewPassword)

  module.exports = router;