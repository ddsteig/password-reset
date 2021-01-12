const router = require("express").Router()
const emailController = require("../../controllers/emailController");

// Matches with "/api/password/reset"
router
  .route("/:userId/:token")
  .post(emailController.receiveNewPassword)

  module.exports = router;