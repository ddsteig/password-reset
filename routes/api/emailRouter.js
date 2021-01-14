const router = require("express").Router()
const emailController = require("../../controllers/emailController");

// Matches with "/api/reset_password"
router.route("/user/:email").post(emailController.sendPasswordResetEmail)

module.exports = router;